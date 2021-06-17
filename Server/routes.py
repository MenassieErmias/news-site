from flask import Flask , Response ,request
from config import db , app , bcrypt , api
from models import Admin,Post
from flask_login import login_user , current_user
from flask_restful import Resource

class Allnews(Resource):
      def get(self):
        page = request.args.get('page',1,type=int)
        posts = Post.query.paginate(page=page,per_page=6)
        results = [{
                    "id":post.id,
                    "title": post.title,
                    "body": post.body,
                    "category":post.category
                } for post in posts.items]
            
        post_total = posts.total
        post_page = posts.page

        return results

class PostNewNews(Resource):
    def post(self):
        request_data = json.loads(request.data)
        admin = Admin.query.filter_by(id=1).first()
        admin_id = admin.id
        title = request_data['title']
        body = request_data['body']
        category = request_data['category']
        image_file = request_data['fd']
        post = Post(title,body,category,admin_id,image_file)
        db.session.add(post)
        db.session.commit()

class Detailpost(Resource):
    def get(self,id):
        post = Post.query.get(id)
        result = {
                    "id":post.id,
                    "title": post.title,
                    "body": post.body,
                }

        return result

class DeletePost(Resource):
    def delete(self,id):
        post = Post.query.filter_by(id=id).first()
        db.session.delete(post)
        db.session.commit()

class Register(Resource):
    def post(self):
        print(current_user.is_authenticated)
        request_data = json.loads(request.data)

        hashed_password = bcrypt.generate_password_hash(request_data['password']).decode('utf')
        username = request_data['username']
        email = request_data['email']
        password = hashed_password
        admin = Admin(username,email,password)
        db.session.add(admin)
        db.session.commit()

class Login(Resource):
    def post(self):
        print(current_user.is_authenticated)

        request_data = json.loads(request.data)
        # if request_data['email'] == 'admin@blog.com' and request_data == 'password':
        admin = Admin.query.filter_by(email=request_data['email']).first()
        print(admin)
        print(request_data['password'])
        print(bcrypt.check_password_hash(admin.password,request_data['password']))

        if admin and bcrypt.check_password_hash(admin.password,request_data['password']):
            print("login successfully")
            login_user(admin,remember=True)
   
api.add_resource(Allnews,"/api")
api.add_resource(PostNewNews,"/api/postNewNews")
api.add_resource(Detailpost,"/api/<int:id>")
api.add_resource(DeletePost,"/api/<int:id>")
api.add_resource(Register,"/api/register")
api.add_resource(Login,"/api/login")