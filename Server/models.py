from app import db

class Posts(db.Model):
    __tablename__ = 'posts'

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(200))
    body = db.Column(db.String(200))

    def __init__(self,title,body):
        self.title = title
        self.body = body