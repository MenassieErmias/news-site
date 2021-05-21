from flask import Flask , Response , json , request , jsonify
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)

ENV = 'dev'
if ENV == 'dev':
    app.debug = True
    app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://postgres:root@localhost/news'
else:
    app.debug  = False
    app.config['SQLALCHEMY_DATABASE_URI'] = ''
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)

class Posts(db.Model):
    __tablename__ = 'posts'

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String())
    body = db.Column(db.String())

    def __init__(self,title,body):
        self.title = title
        self.body = body


# class User(db.Model):
#     __tablename__ = 'Admins'

#     id = db.Column(db.Integer,primary_key=True)
#     username = db.Column(db.String(),unique=True,nullable=False)
#     email = db.Column(db.String(),unique=True,nullable=False)
#     image_file = db.Column(db.String(),nullable=False,defulat='defualt.jpg')
#     password = db.Column(db.String(),nullable=False)
#     date_registered = db.Column(db.DateTime,nullable=False,defualt=datetime.utcnow)
#     Posts = db.relationship('Post',backref='author',lazy=True)

#     id = db.Column(db.Integer,primary_key=True)
# class NewsPost(db.Model):
#     title = db.Column(db.String())
#     body = db.Column(db.String())
#     date_posted = db.Column(db.String())
#     user_id = db.Column(db.Integer,db.ForeignKey('user.id'),nullable)



@app.route("/api" , methods=['GET'])
def getallnews():
    #   posts = Posts.query.all()
      page = request.args.get('page',1,type=int)
      posts = Posts.query.paginate(page=page,per_page=6)
      results = [{
                "id":post.id,
                "title": post.title,
                "body": post.body,
            } for post in posts.items]

        
      post_total = posts.total
      post_page = posts.page

      return Response(json.dumps(results),  mimetype='application/json')

@app.route("/api/postNewNews" , methods=['POST'])
def postNewNews():
    request_data = json.loads(request.data)
    title = request_data['title']
    body = request_data['body']
    post = Posts(title,body)
    db.session.add(post)
    db.session.commit()

@app.route('/api/<int:id>' , methods=['GET'])
def detailpost(id):
    post = Posts.query.get(id)
    result = {
                "id":post.id,
                "title": post.title,
                "body": post.body,
            }

    return Response(json.dumps(result),  mimetype='application/json')

@app.route('/api/<int:id>' , methods=['DELETE'])
def deletePost(id):
    post = Posts.query.filter_by(id=id).first()
    db.session.delete(post)
    db.session.commit()

if __name__ == '__main__':
    app.run(debug=True) 