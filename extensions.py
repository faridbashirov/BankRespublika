from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_admin import Admin
from app import app

app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql://root:123@127.0.0.1:3307/BankRespublika'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] =True
app.config["SECRET_KEY"]="myproject"


db=SQLAlchemy(app)
migrate = Migrate(app, db)
admin = Admin(app, name='Bank respublika', template_mode='bootstrap4')


