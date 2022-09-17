from extensions import db,admin
from flask_admin.contrib.sqla import ModelView
from models import *

class Cardsadmin(ModelView):
    column_exclude_list = ['detail','desc']
    can_view_details=True
class Newsadmin(ModelView):
    column_exclude_list = ['text',]
    can_view_details=True
class Contactadmin(ModelView):
    can_create = False

admin.add_view(ModelView(Orders, db.session, name="Order" ,menu_icon_type="fa",menu_icon_value="fa-user"))   
admin.add_view(ModelView(Branch, db.session,menu_icon_type='fa', menu_icon_value='adress-book'))   
admin.add_view(Cardsadmin(Carts, db.session))   
admin.add_view(ModelView(Companies, db.session))   
admin.add_view(ModelView(Products, db.session))   
admin.add_view(ModelView(Category, db.session))   
admin.add_view(ModelView(Contact, db.session))   
admin.add_view(Newsadmin(News, db.session))    
