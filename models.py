from itertools import product
from pickle import FALSE
from extensions import admin

from extensions import db

class  News(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title=db.Column(db.Text,nullable=False)
    description=db.Column(db.Text,nullable=True)
    text=db.Column(db.Text,nullable=True)
    url=db.Column(db.Text,nullable=False)
    created_At=db.Column(db.Text,nullable=False)
    
    def __init__(self,title,description,url,text,created_at):
        self.title=title
        self.description=description
        self.text=text
        self.url=url
        self.created_at=created_at
        
    def __repr__(self):
        return self.title
    def save(self):
        db.session.add(self)
        db.session.commit()
 
class Contact(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    reqem=db.Column(db.Text,nullable=False)
    sened=db.Column(db.Text,nullable=False)
    nomre=db.Column(db.Text,nullable=False)
    captcha=db.Column(db.Text,nullable=False)
    checkbox=db.Column(db.Text,nullable=False)
    filial=db.Column(db.Text,nullable=False)
   
    def __init__(self,reqem,sened,nomre,capthca,checkbox,filial):
      self.reqem=reqem
      self.sened=sened
      self.nomre=nomre
      self.captcha=capthca
      self.checkbox=checkbox
      self.filial=filial
    def __repr__(self):
            return self.reqem
    def save(self):
        db.session.add(self)
        db.session.commit()

class  Category(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    product=db.Column(db.Text,nullable=False)
    
    def __init__(self,product):
        self.product=product
       
    def __repr__(self):
        return self.product
    def save(self):
        db.session.add(self)
        db.session.commit()

class  Products(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title=db.Column(db.Text,nullable=False)
    description=db.Column(db.Text,nullable=True)
    category_id=db.Column(db.Integer,db.ForeignKey("category.id"),nullable=False)
    
    def __init__(self,title,description,category_id):
        self.title=title
        self.description=description
        self.category_id=category_id
      
    def __repr__(self):
        return self.title
    def save(self):
        db.session.add(self)
        db.session.commit()



class Companies(db.Model):
    id = db.Column(db.Integer,primary_key=True)
    title=db.Column(db.Text(1000),nullable=False)
    spot=db.Column(db.String(255),nullable=False)
    text=db.Column(db.Text(9999),nullable=False)
    caps=db.Column(db.String(255),nullable=False)
    img=db.Column(db.String(255),nullable=False)
    client_type=db.Column(db.String(255),nullable=False)
    published_date=db.Column(db.String(255),nullable=False)
    first_date=db.Column(db.String(255),nullable=False)
    last_date=db.Column(db.String(255),nullable=False)
    def __repr__(self):
        return f'{self.title}'
    def __init__(self,title,spot,text,caps,img,client_type,published_date,first_date,last_date):
        self.title=title
        self.spot=spot
        self.text=text
        self.caps=caps
        self.img=img
        self.client_type=client_type
        self.published_date=published_date
        self.first_date=first_date
        self.last_date=last_date

    def save(self):
        db.session.add(self)
        db.session.commit()



class Carts(db.Model):
    id = db.Column(db.Integer,primary_key=True)
    title=db.Column(db.String(255),nullable=False)
    detail=db.Column(db.Text(99999),nullable=False)
    img=db.Column(db.String(255),nullable=False)
    order=db.Column(db.Boolean, nullable=False, default='True')
    desc=db.Column(db.Text(1000),nullable=True)
    type=db.Column(db.String(255),nullable=False)
    comp=db.Column(db.String(255),nullable=False)
    clas=db.Column(db.String(255),nullable=False)
    currency=db.Column(db.String(255),nullable=False)
    buraxilmahaqqi_1=db.Column(db.String(255),nullable=True)
    buraxilmahaqqi_2=db.Column(db.String(255),nullable=True)
    istifademuddeti=db.Column(db.String(255),nullable=True)
    qaliquzrefaiz=db.Column(db.String(255),nullable=True)
    valyuta=db.Column(db.String(255),nullable=True)
    kreditxetti=db.Column(db.String(255),nullable=True)
    qiymet_1=db.Column(db.String(255),nullable=True)
    qiymet_2=db.Column(db.String(255),nullable=True)
    qiymet_3=db.Column(db.String(255),nullable=True)
    ilkinmedaxil_1=db.Column(db.String(255),nullable=True)
    ilkinmedaxil_2=db.Column(db.String(255),nullable=True)
    yasheddi=db.Column(db.String(255),nullable=True)
    buraxilmaformasi=db.Column(db.String(255),nullable=True)
    senedler=db.Column(db.String(255),nullable=True)
    kartinmuddeti=db.Column(db.String(255),nullable=True)
    balansnovleri=db.Column(db.String(255),nullable=True)
    valyulatar=db.Column(db.String(255),nullable=True)
    balansinartirilmasi=db.Column(db.String(255),nullable=True)
    naglasdirma=db.Column(db.String(255),nullable=True)
    vipzalistifade=db.Column(db.String(255),nullable=True)
    grupkecis=db.Column(db.String(255),nullable=True)
    vipzalbiristifade=db.Column(db.String(255),nullable=True)
    buraxilmaqiymeti=db.Column(db.String(255),nullable=True)



    def __repr__(self):
        return f'{self.title}'
    def __init__(self,title,detail,img,order,desc,type,comp,clas,currency,buraxilmahaqqi_1,buraxilmahaqqi_2,istifademuddeti,qaliquzrefaiz,valyuta,kreditxetti,qiymet_1,qiymet_2,qiymet_3,ilkinmedaxil_1,ilkinmedaxil_2,yasheddi,buraxilmaformasi,senedler,kartinmuddeti,balansnovleri,valyulatar,balansinartirilmasi,naglasdirma,vipzalistifade,grupkecis,vipzalbiristifade,buraxilmaqiymeti):
        self.title=title
        self.detail=detail
        self.img=img
        self.order=order
        self.desc=desc
        self.type=type
        self.comp=comp
        self.clas=clas
        self.comp=comp
        self.currency=currency
        self.buraxilmahaqqi_1=buraxilmahaqqi_1
        self.buraxilmahaqqi_2=buraxilmahaqqi_2
        self.istifademuddeti=istifademuddeti
        self.qaliquzrefaiz=qaliquzrefaiz
        self.valyuta=valyuta
        self.kreditxetti=kreditxetti
        self.kreditxetti=kreditxetti
        self.qiymet_1=qiymet_1
        self.qiymet_2=qiymet_2
        self.qiymet_3=qiymet_3
        self.ilkinmedaxil_1=ilkinmedaxil_1
        self.ilkinmedaxil_2=ilkinmedaxil_2
        self.yasheddi=yasheddi
        self.buraxilmaformasi=buraxilmaformasi
        self.senedler=senedler
        self.kartinmuddeti=kartinmuddeti
        self.balansnovleri=balansnovleri
        self.valyulatar=valyulatar
        self.balansinartirilmasi=balansinartirilmasi
        self.naglasdirma=naglasdirma
        self.vipzalistifade=vipzalistifade
        self.grupkecis=grupkecis
        self.vipzalbiristifade=vipzalbiristifade
        self.buraxilmaqiymeti=buraxilmaqiymeti


    def save(self):
        db.session.add(self)
        db.session.commit()


class Branch(db.Model):
    id = db.Column(db.Integer,primary_key=True)
    branch=db.Column(db.String(255),nullable=False)
    def __repr__(self):
        return f'{self.branch}'
    def __init__(self,branch):
        self.branch=branch

    def save(self):
        db.session.add(self)
        db.session.commit()



class Orders(db.Model):
    id = db.Column(db.Integer,primary_key=True)
    kart=db.Column(db.String(255),nullable=False)
    valyuta=db.Column(db.String(255),nullable=False)
    muddet=db.Column(db.String(255),nullable=False)
    hazirlanma=db.Column(db.String(255),nullable=False)
    filial=db.Column(db.String(255),nullable=False)
    ad=db.Column(db.String(255),nullable=False)
    soyad=db.Column(db.String(255),nullable=False)
    ataadi=db.Column(db.String(255),nullable=False)
    fin=db.Column(db.String(255),nullable=False)
    mexfisoz=db.Column(db.String(255),nullable=False)
    nomre=db.Column(db.String(255),nullable=False)
    mail=db.Column(db.String(255),nullable=False)

    def __repr__(self):
        return f'{self.ad}'
    def __init__(self,kart,valyuta,muddet,hazirlanma,filial,ad,soyad,ataadi,fin,mexfisoz,nomre,mail):
        self.kart=kart
        self.valyuta=valyuta
        self.muddet=muddet
        self.hazirlanma=hazirlanma
        self.filial=filial
        self.ad=ad
        self.soyad=soyad
        self.ataadi=ataadi
        self.fin=fin
        self.mexfisoz=mexfisoz
        self.nomre=nomre
        self.mail=mail

    def save(self):
        db.session.add(self)
        db.session.commit()

