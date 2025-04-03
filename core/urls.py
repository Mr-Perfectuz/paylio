from django.urls import path
from . import views, transaction

app_name = "core"

urlpatterns = [
    path("",  views.index, name="index"),

    # transactions
    path("transactions/", transaction.transaction_lists, name="transactions"),
]