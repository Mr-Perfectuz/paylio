from django.shortcuts import render, redirect
from django.http import HttpResponse
from django.views import View
from django.utils.decorators import method_decorator
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth import logout

def index(request):
    if request.user.is_authenticated:
        return redirect("account:account")
    return render(request, "core/index.html")
#personal
def payments(request):
    return render(request, "personal/payments-01.html")
def subscriptions(request):
    return render(request, "personal/subscriptions.html")
def security(request):
    return render(request, "personal/security.html")
def fees(request):
    return render(request, "personal/fees.html")
#business
def business_account(request):
    return render(request, "business/business-account.html")
def corporate_card(request):
    return render(request, "business/corporate-card.html")
def expense_management(request):
    return render(request, "business/expense-management.html")
def budgeting_and_analytics(request):
    return render(request, "business/budgeting-and-analytics.html")
def integrations(request):
    return render(request, "business/integrations.html")
def invoice_management(request):
    return render(request, "business/invoice-management.html")
def rewards(request):
    return render(request, "business/rewards.html")
#company
def about(request):
    return render(request, "company/about.html")
def career(request):
    return render(request, "company/career.html")
def career_details(request):
    return render(request, "company/career-details.html")
def blog_details(request):
    return render(request, "company/blog-details.html")
def blog(request):
    return render(request, "company/blog.html")
def error(request):
    return render(request, "company/error.html")
#help
def help_center(request):
    return render(request, "company/help-center.html")
def help_center_category(request):
    return render(request, "company/help-center-category.html")

#core
def contact(request):
    return render(request, "core/contact.html")



class AdminLogoutView(View):
    @method_decorator(csrf_exempt)
    def dispatch(self, request, *args, **kwargs):
        return super().dispatch(request, *args, **kwargs)

    def get(self, request):
        logout(request)
        return redirect("/admin/login/?logged_out=true")
    
    def post(self, request):
        logout(request)
        return redirect("/admin/login/?logged_out=true")