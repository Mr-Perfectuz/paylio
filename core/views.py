from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
def index(request ):
    return render(request, "core/index.html")

def contact(request):
    return render(request, "core/contact.html")

def about(request):
    return render(request, "core/about.html")