from django.core.mail import send_mail
from django.shortcuts import redirect, render
from bs4 import BeautifulSoup
import requests

# Create your views here.


def home(request):
    url="http://185.197.160.211/"
    data = []
    html_doc = requests.get(url)
    soup = BeautifulSoup(html_doc.text, 'html.parser')
    btc_price = soup.find('a', class_ = 'butn')
    table = soup.find('table')
    table_head = table.find_all('th')
    table_body = soup.find('tbody')
    rows = table_body.find_all('tr')
    for row in rows:
        cols = row.find_all('td')
        col = [t.text.strip() for t in cols]
        data.append(col)
    head_text = []
    for t in table_head:
        head_text.append(t.text)
    context = {
        # 'btc':btc_price.text,
        'head_text':head_text,
        'datas':data
    }
    return render(request, 'home.html',context)

def qr_code(request):
    if request.method == "POST":
        coin = request.POST.get("coine-number")
        if coin:
            return render(request,'parseview/coin_qr.html',{"target":True})
        else:
            return render(request,'parseview/coin_qr_empty.html',{"target":True})

def send_email(request):
    if request.method == "POST":
        name = request.POST.get("name")
        email = request.POST.get("email")
        message = request.POST.get("message")

        send_mail(
            f"message from {name}",
            f'this e-mail from {email} \n{message}',
            "btcdouble49@gmail.com",
            ['support@btcdouble.net'],
            fail_silently=False
        )
    
        return redirect('/')