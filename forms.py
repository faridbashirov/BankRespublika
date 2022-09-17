from ast import operator
from random import choices
from models import *
from xml.dom import ValidationErr
from flask_wtf import FlaskForm
from wtforms import StringField,SelectField,BooleanField,RadioField,IntegerField,DecimalField,validators
from wtforms.validators import DataRequired,ValidationError,Length,NumberRange,Email






class Card(FlaskForm):
    reqem=IntegerField(validators=[DataRequired()])
    sened=IntegerField(validators=[DataRequired()])
    nomre=IntegerField(validators=[DataRequired(),NumberRange(min=11111111)])
    seriya= SelectField(
        u'Industry Type',
        choices = [('AZE', 'AZE'), ('AA', 'AA'),],validators=[DataRequired()]
    ) 
    
    operator= SelectField(
        u'Industry Type',
        choices = [('55','55'),('50', '50'), ('51', '51'),],validators=[DataRequired()]
    ) 
    capthca=IntegerField(label="full_name",validators=[DataRequired()])
    checkbox= RadioField('Label', choices=[('value','1 gun'),('value1','3 gun')])
    filial=SelectField(
        u'Industry Type',
        choices = [(branch.branch,branch.branch) for branch in Branch.query.all()],validators=[DataRequired()]
    )
 



class Order(FlaskForm):
    carts=[]
    for cart in  Carts.query.all():
        if cart.order:
            carts.append(cart.title)
    kart=SelectField('kart',choices=[(cart, cart) for cart in carts ])
    valyuta=SelectField('valyuta',choices=[('AZN', 'AZN'),('USD','USD'),('EURO','EURO')])
    muddet=SelectField('muddet',choices=[('1-il 10AZN', '1-il 10AZN'),('2-il 15AZN', '2-il 15AZN'),('3-il 20AZN', '3-il 20AZN'),('4-il 25AZN', '4-il 25AZN')])
    hazirlanma=SelectField('hazirlanma',choices=[('1gün-10AZN', '1gün-10AZN'),('3gün-0AZN','3gün-0AZN')])
    filial=SelectField('filial',choices=[(branch.branch,branch.branch) for branch in Branch.query.all() ])
    ad=StringField('ad', validators=[DataRequired()], render_kw={"placeholder": "Adınız"})
    soyad=StringField('soyad', validators=[DataRequired()],render_kw={"placeholder": "Soyadınız"})
    ataadi=StringField('ataadi', validators=[DataRequired()],render_kw={"placeholder": "Atanızın adı"})
    fin=StringField('fin', validators=[DataRequired(), Length(min=6,max=6)],render_kw={"placeholder": "------"})
    mexfisoz=StringField('mexfisoz', validators=[DataRequired(), Length(min=1,max=20)],render_kw={"placeholder": "Məxfi sözü daxil edin"})
    nomre=StringField('nomre', validators=[DataRequired(), Length(min=9,max=9)])
    mail=StringField('email', validators=[DataRequired(), Email()])

    