from multiprocessing.sharedctypes import Value
from flask import render_template,request,redirect
import requests,xmltodict
from datetime import datetime
from app import app
from models import *
from forms import *

from crypt import methods
from flask import render_template, url_for,request, redirect




@app.route("/")
def index():
    product=Products.query.all()
    category=Category.query.all()
    currency=requests.get(f'https://www.cbar.az/currencies/{datetime.now().strftime("%d.%m.%Y")}.xml')
    currency_list=xmltodict.parse(currency.content)
    news=News.query.all()
    return render_template("home.html",news=news,product=product,category=category,currency=currency_list)
@app.route("/news")
def news():
    news=News.query.all()
    return render_template("news.html",news=news)
@app.route("/news/<slug>")
def newsdetail(slug):
    f=News.query.filter(News.title==slug).first()
    news=News.query.all()
    
    return  render_template("news_detail.html",news=news,f=f)
@app.route("/cardrenew",methods=['GET','POST'])
def Cardrenew():
    form=Card()
    f= form.checkbox.choices
   
    if request.method=="POST":
       post_data=request.form
       value=form.checkbox.data
       choices = dict(form.checkbox.choices)
       label = choices[value]
       form=Card(data=post_data)
       if form.validate_on_submit():
        contact=Contact(reqem=form.reqem.data,sened=form.seriya.data+str(form.sened.data),nomre=form.operator.data+str(form.nomre.data),checkbox=label,filial=form.filial.data,capthca=form.capthca.data)
        contact.save()
        
        return redirect("/cardrenew")
             
    return render_template("cardrenew.html",form=form,f=f)


@app.route('/companies')
def companies():
    all_companies=Companies.query.all()
    return render_template("companies.html",companies=all_companies)

@app.route('/companie/<slug>')
def companie(slug):
    all_companies=Companies.query.filter(Companies.title== slug).first()
    return render_template("companie.html", companie=all_companies)

@app.route('/plasticcarts')
def plasticcarts():
    all_carts=Carts.query.all()
    return render_template("plasticcarts.html",carts=all_carts)


@app.route('/plasticcart/<slug>')
def carts(slug):
    all_carts=Carts.query.filter(Carts.title==slug).first()
    return render_template("plasticcart.html", cart=all_carts)

@app.route('/cartoffer', methods=['GET','POST'])
def cartoffer():
    carts=Carts.query.all()
    form=Order()
    if request.method=='POST':
        post_data=request.form
        form=Order(data=post_data)
        if form.validate_on_submit() :
            order=Orders(kart=form.kart.data, valyuta=form.valyuta.data, muddet=form.muddet.data, hazirlanma=form.hazirlanma.data, filial=form.filial.data, ad=form.ad.data, soyad=form.soyad.data, ataadi=form.ataadi.data, fin=form.fin.data, mexfisoz=form.mexfisoz.data, nomre=form.nomre.data, mail=form.mail.data)
            order.save()
            
            return redirect('/')
    return render_template('cartoffer.html', form=form,carts=carts)
