from django.conf import settings
from django.shortcuts import render


def index(request, *args, **kwargs):
    filenames = settings.STATICFILES_DIRS
    # might break with collectstatic
    paths = [filename for filename in filenames if not filename.endswith(".txt")]
    return render(request, "frontend/index.html", context={"paths": paths})
