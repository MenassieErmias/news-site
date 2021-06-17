from datetime import datetime
from config import db , login_manager
from flask_login import UserMixin

@login_manager.user_loader
def load_user(user_id):
    return Admin.query.get(int(admin_id))


class Post(db.Model):
    __tablename__ = 'posts'

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String())
    body = db.Column(db.String())
    category = db.Column(db.String())
    date_posted = db.Column(db.DateTime,nullable=False,default=datetime.utcnow)
    admin_id = db.Column(db.Integer,db.ForeignKey('admins.id'),nullable=False)
    image_file = db.Column(db.String(),nullable=False,defulat='defualt.jpg')
        

    def __init__(self,title,body,category,admin_id,image_file):
        self.title = title
        self.body = body
        self.category = category
        self.admin_id = admin_id
        self.image_file = image_file



