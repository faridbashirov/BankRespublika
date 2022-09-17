const cart = document.getElementsByClassName('row')
const kredt = document.getElementsByClassName('kredt')[0]
const debt = document.getElementsByClassName('debt')[0]
const takst = document.getElementsByClassName('takst')[0]
const transfr = document.getElementsByClassName('transfr')[0]
const masterkart = document.getElementsByClassName('masterkart')[0]
const viza = document.getElementsByClassName('viza')[0]
const klassik = document.getElementsByClassName('klassik')[0]
const qold = document.getElementsByClassName('qold')[0]
const prem = document.getElementsByClassName('prem')[0]
const manat = document.getElementsByClassName('manat')[0]
const usd = document.getElementsByClassName('usd')[0]
const eu = document.getElementsByClassName('eu')[0]
const kredit = document.querySelectorAll('.kredit')
const debet = document.querySelectorAll('.debet')
const taksit = document.querySelectorAll('.taksit')
const transfer = document.querySelectorAll('.transfer')
const master = document.querySelectorAll('.mastercard')
const visa = document.querySelectorAll('.visa')
const classic = document.querySelectorAll('.classic')
const gold = document.querySelectorAll('.gold')
const premium = document.querySelectorAll('.premium')
const azn = document.querySelectorAll('.azn')
const dollar = document.querySelectorAll('.dollar')
const euro = document.querySelectorAll('.euro')



document.addEventListener("click",(event)=>{
    if(event.target.className === "kredt"){
        if(kredt.getAttribute('data-filter')==='deactive'){
            kredt.setAttribute('data-filter','active')
            kredt.style.cssText+='background-color:whitesmoke;'
            
            debt.setAttribute('data-filter','deactive')
            debt.style.cssText+='background-color:white;'

            takst.setAttribute('data-filter','deactive')
            takst.style.cssText+='background-color:white;'

            transfr.setAttribute('data-filter','deactive')
            transfr.style.cssText+='background-color:white;'

            kredit.forEach(krdt => {
                krdt.style.cssText='display:flex !important; position:relative !important;'
            });
            

            debet.forEach(dbt => {
                dbt.style.cssText='display:none !important; position:relative !important;'
            });

            taksit.forEach(tkst => {
                tkst.style.cssText='display:none !important; position:relative !important;'
            });

            transfer.forEach(tnsfr => {
                tnsfr.style.cssText='display:none !important; position:relative !important;'
            });

        }
        else if(kredt.getAttribute('data-filter')==='active'){   
            kredt.setAttribute('data-filter','deactive')
            kredt.style.cssText+='background-color:white;'       
            debet.forEach(dbt => {
                dbt.style.cssText='display:flex !important; position:relative !important;'
            });

            taksit.forEach(tkst => {
                tkst.style.cssText='display:flex !important; position:relative !important;'
            });

            transfer.forEach(tnsfr => {
                tnsfr.style.cssText='display:flex !important; position:relative !important;'
            });
        }
    }
    else if(event.target.className==='debt'){
        if(debt.getAttribute('data-filter')==='deactive'){
            debt.setAttribute('data-filter','active')
            debt.style.cssText+='background-color:whitesmoke;'
            
            kredt.setAttribute('data-filter','deactive')
            kredt.style.cssText+='background-color:white;'

            takst.setAttribute('data-filter','deactive')
            takst.style.cssText+='background-color:white;'

            transfr.setAttribute('data-filter','deactive')
            transfr.style.cssText+='background-color:white;'

            debet.forEach(krdt => {
                krdt.style.cssText='display:flex !important; position:relative !important;'
            });
            

            kredit.forEach(dbt => {
                dbt.style.cssText='display:none !important; position:relative !important;'
            });

            taksit.forEach(tkst => {
                tkst.style.cssText='display:none !important; position:relative !important;'
            });

            transfer.forEach(tnsfr => {
                tnsfr.style.cssText='display:none !important; position:relative !important;'
            });

        }
        else if(debt.getAttribute('data-filter')==='active'){           
            debt.setAttribute('data-filter','deactive')
            debt.style.cssText+='background-color:white;'

            kredit.forEach(dbt => {
                dbt.style.cssText='display:flex !important; position:relative !important;'
            });

            taksit.forEach(tkst => {
                tkst.style.cssText='display:flex !important; position:relative !important;'
            });

            transfer.forEach(tnsfr => {
                tnsfr.style.cssText='display:flex !important; position:relative !important;'
            });
        }
    }
    else if(event.target.className==='takst'){
        if(takst.getAttribute('data-filter')==='deactive'){
            takst.setAttribute('data-filter','active')
            takst.style.cssText+='background-color:whitesmoke;'
            
            kredt.setAttribute('data-filter','deactive')
            kredt.style.cssText+='background-color:white;'

            debt.setAttribute('data-filter','deactive')
            debt.style.cssText+='background-color:white;'

            transfr.setAttribute('data-filter','deactive')
            transfr.style.cssText+='background-color:white;'

            taksit.forEach(krdt => {
                krdt.style.cssText='display:flex !important; position:relative !important;'
            });
            

            kredit.forEach(dbt => {
                dbt.style.cssText='display:none !important; position:relative !important;'
            });

            debet.forEach(tkst => {
                tkst.style.cssText='display:none !important; position:relative !important;'
            });

            transfer.forEach(tnsfr => {
                tnsfr.style.cssText='display:none !important; position:relative !important;'
            });

        }
        else if(takst.getAttribute('data-filter')==='active'){           
            takst.setAttribute('data-filter','deactive')
            takst.style.cssText+='background-color:white;'

            kredit.forEach(dbt => {
                dbt.style.cssText='display:flex !important; position:relative !important;'
            });

            debet.forEach(tkst => {
                tkst.style.cssText='display:flex !important; position:relative !important;'
            });

            transfer.forEach(tnsfr => {
                tnsfr.style.cssText='display:flex !important; position:relative !important;'
            });
        }
    }
    else if(event.target.className==='transfr'){
        if(transfr.getAttribute('data-filter')==='deactive'){
            transfr.setAttribute('data-filter','active')
            transfr.style.cssText+='background-color:whitesmoke;'
            
            kredt.setAttribute('data-filter','deactive')
            kredt.style.cssText+='background-color:white;'

            debt.setAttribute('data-filter','deactive')
            debt.style.cssText+='background-color:white;'

            takst.setAttribute('data-filter','deactive')
            takst.style.cssText+='background-color:white;'

            transfer.forEach(krdt => {
                krdt.style.cssText='display:flex !important; position:relative !important;'
            });
            

            kredit.forEach(dbt => {
                dbt.style.cssText='display:none !important; position:relative !important;'
            });

            debet.forEach(tkst => {
                tkst.style.cssText='display:none !important; position:relative !important;'
            });

            taksit.forEach(tnsfr => {
                tnsfr.style.cssText='display:none !important; position:relative !important;'
            });

        }
        else if(transfr.getAttribute('data-filter')==='active'){           
            transfr.setAttribute('data-filter','deactive')
            transfr.style.cssText+='background-color:white;'

            kredit.forEach(dbt => {
                dbt.style.cssText='display:flex !important; position:relative !important;'
            });

            debet.forEach(tkst => {
                tkst.style.cssText='display:flex !important; position:relative !important;'
            });

            taksit.forEach(tnsfr => {
                tnsfr.style.cssText='display:flex !important; position:relative !important;'
            });
        }
    }
    else if(event.target.className==='masterkart'){
        if(masterkart.getAttribute('data-filter')==='deactive'){
            masterkart.setAttribute('data-filter','active')
            masterkart.style.cssText+='background-color:whitesmoke;'
            
            viza.setAttribute('data-filter','deactive')
            viza.style.cssText+='background-color:white;'

            master.forEach(krdt => {
                krdt.style.cssText='display:flex !important; position:relative !important;'
            });
            

            visa.forEach(dbt => {
                dbt.style.cssText='display:none !important; position:relative !important;'
            });


        }
        else if(masterkart.getAttribute('data-filter')==='active'){           
            masterkart.setAttribute('data-filter','deactive')
            masterkart.style.cssText+='background-color:white;'

            visa.forEach(dbt => {
                dbt.style.cssText='display:flex !important; position:relative !important;'
            });

        }
    }
    else if(event.target.className==='viza'){
        if(viza.getAttribute('data-filter')==='deactive'){
            viza.setAttribute('data-filter','active')
            viza.style.cssText+='background-color:whitesmoke;'
            
            masterkart.setAttribute('data-filter','deactive')
            masterkart.style.cssText+='background-color:white;'

            visa.forEach(krdt => {
                krdt.style.cssText='display:flex !important; position:relative !important;'
            });
            

            master.forEach(dbt => {
                dbt.style.cssText='display:none !important; position:relative !important;'
            });


        }
        else if(viza.getAttribute('data-filter')==='active'){           
            viza.setAttribute('data-filter','deactive')
            viza.style.cssText+='background-color:white;'

            master.forEach(dbt => {
                dbt.style.cssText='display:flex !important; position:relative !important;'
            });

        }
    }
    else if(event.target.className==='klassik'){
        if(klassik.getAttribute('data-filter')==='deactive'){
            klassik.setAttribute('data-filter','active')
            klassik.style.cssText+='background-color:whitesmoke;'
            
            qold.setAttribute('data-filter','deactive')
            qold.style.cssText+='background-color:white;'

            prem.setAttribute('data-filter','deactive')
            prem.style.cssText+='background-color:white;'

            classic.forEach(krdt => {
                krdt.style.cssText='display:flex !important; position:relative !important;'
            });
            

            gold.forEach(dbt => {
                dbt.style.cssText='display:none !important; position:relative !important;'
            });

            premium.forEach(dbt => {
                dbt.style.cssText='display:none !important; position:relative !important;'
            });


        }
        else if(klassik.getAttribute('data-filter')==='active'){           
            klassik.setAttribute('data-filter','deactive')
            klassik.style.cssText+='background-color:white;'

            gold.forEach(dbt => {
                dbt.style.cssText='display:flex !important; position:relative !important;'
            });

            premium.forEach(dbt => {
                dbt.style.cssText='display:flex !important; position:relative !important;'
            });


        }
    }
    else if(event.target.className==='qold'){
        if(qold.getAttribute('data-filter')==='deactive'){
            qold.setAttribute('data-filter','active')
            qold.style.cssText+='background-color:whitesmoke;'
            
            klassik.setAttribute('data-filter','deactive')
            klassik.style.cssText+='background-color:white;'

            prem.setAttribute('data-filter','deactive')
            prem.style.cssText+='background-color:white;'

            gold.forEach(krdt => {
                krdt.style.cssText='display:flex !important; position:relative !important;'
            });
            

            classic.forEach(dbt => {
                dbt.style.cssText='display:none !important; position:relative !important;'
            });

            premium.forEach(dbt => {
                dbt.style.cssText='display:none !important; position:relative !important;'
            });


        }
        else if(qold.getAttribute('data-filter')==='active'){           
            qold.setAttribute('data-filter','deactive')
            qold.style.cssText+='background-color:white;'

            classic.forEach(dbt => {
                dbt.style.cssText='display:flex !important; position:relative !important;'
            });

            premium.forEach(dbt => {
                dbt.style.cssText='display:flex !important; position:relative !important;'
            });


        }
    }
    else if(event.target.className==='prem'){
        if(prem.getAttribute('data-filter')==='deactive'){
            prem.setAttribute('data-filter','active')
            prem.style.cssText+='background-color:whitesmoke;'
            
            qold.setAttribute('data-filter','deactive')
            qold.style.cssText+='background-color:white;'

            klassik.setAttribute('data-filter','deactive')
            klassik.style.cssText+='background-color:white;'

            premium.forEach(krdt => {
                krdt.style.cssText='display:flex !important; position:relative !important;'
            });
            

            gold.forEach(dbt => {
                dbt.style.cssText='display:none !important; position:relative !important;'
            });

            classic.forEach(dbt => {
                dbt.style.cssText='display:none !important; position:relative !important;'
            });


        }
        else if(prem.getAttribute('data-filter')==='active'){           
            prem.setAttribute('data-filter','deactive')
            prem.style.cssText+='background-color:white;'

            gold.forEach(dbt => {
                dbt.style.cssText='display:flex !important; position:relative !important;'
            });

            classic.forEach(dbt => {
                dbt.style.cssText='display:flex !important; position:relative !important;'
            });


        }
    }
    else if(event.target.className==='manat'){
        if(manat.getAttribute('data-filter')==='deactive'){
            manat.setAttribute('data-filter','active')
            manat.style.cssText+='background-color:whitesmoke;'
            
            usd.setAttribute('data-filter','deactive')
            usd.style.cssText+='background-color:white;'

            eu.setAttribute('data-filter','deactive')
            eu.style.cssText+='background-color:white;'

            azn.forEach(krdt => {
                krdt.style.cssText='display:flex !important; position:relative !important;'
            });
            

            dollar.forEach(a => {
                if(a.classList.contains('azn')){
                    a.style.cssText='display:flex !important; position:relative !important;'
                }
                else{
                a.style.cssText='display:none !important; position:relative !important;'
                }        
            });


            euro.forEach(dbt => {
                if(dbt.classList.contains('azn')){
                    dbt.style.cssText='display:flex !important; position:relative !important;'
                }
                else{
                    dbt.style.cssText='display:none !important; position:relative !important;'
                }   
            });


        }
        else if(manat.getAttribute('data-filter')==='active'){           
            manat.setAttribute('data-filter','deactive')
            manat.style.cssText+='background-color:white;'

            dollar.forEach(a => {
                a.style.cssText='display:flex !important; position:relative !important;'
            });

            euro.forEach(dbt => {
                dbt.style.cssText='display:flex !important; position:relative !important;'
            });


        }
    }
    else if(event.target.className==='usd'){
        if(usd.getAttribute('data-filter')==='deactive'){
            usd.setAttribute('data-filter','active')
            usd.style.cssText+='background-color:whitesmoke;'
            
            manat.setAttribute('data-filter','deactive')
            manat.style.cssText+='background-color:white;'

            eu.setAttribute('data-filter','deactive')
            eu.style.cssText+='background-color:white;'

            dollar.forEach(b => {
                b.style.cssText='display:flex !important; position:relative !important;'
            });
            

            azn.forEach(a => {
                if(a.classList.contains('dollar')){
                    a.style.cssText='display:flex !important; position:relative !important;'
                }
                else{
                    a.style.cssText='display:none !important; position:relative !important;'
                }   
            });

            euro.forEach(e => {
                if(e.classList.contains('dollar')){
                    e.style.cssText='display:flex !important; position:relative !important;'
                }
                else{
                    e.style.cssText='display:none !important; position:relative !important;'
                }   
            });


        }
        else if(usd.getAttribute('data-filter')==='active'){           
            usd.setAttribute('data-filter','deactive')
            usd.style.cssText+='background-color:white;'

            azn.forEach(a => {
                a.style.cssText='display:flex !important; position:relative !important;'
            });

            euro.forEach(e => {
                e.style.cssText='display:flex !important; position:relative !important;'
            });


        }
    }
    else if(event.target.className==='eu'){
        if(eu.getAttribute('data-filter')==='deactive'){
            eu.setAttribute('data-filter','active')
            eu.style.cssText+='background-color:whitesmoke;'
            
            usd.setAttribute('data-filter','deactive')
            usd.style.cssText+='background-color:white;'

            manat.setAttribute('data-filter','deactive')
            manat.style.cssText+='background-color:white;'

            euro.forEach(krdt => {
                krdt.style.cssText='display:flex !important; position:relative !important;'
            });
            

            dollar.forEach(dbt => {
                if(dbt.classList.contains('euro')){
                    dbt.style.cssText='display:flex !important; position:relative !important;'
                }
                else{
                    dbt.style.cssText='display:none !important; position:relative !important;'
                }   
            });

            azn.forEach(dbt => {
                if(dbt.classList.contains('dollar')){
                    dbt.style.cssText='display:flex !important; position:relative !important;'
                }
                else{
                    dbt.style.cssText='display:none !important; position:relative !important;'
                }   
            });

        }
        else if(eu.getAttribute('data-filter')==='active'){           
            eu.setAttribute('data-filter','deactive')
            eu.style.cssText+='background-color:white;'

            dollar.forEach(dbt => {
                dbt.style.cssText='display:flex !important; position:relative !important;'
            });

            azn.forEach(dbt => {
                dbt.style.cssText='display:flex !important; position:relative !important;'
            });


        }
    }
})
