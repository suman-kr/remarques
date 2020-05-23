from django.db import models
from django.contrib.postgres.fields import JSONField
# Create your models here.
class Notepad(models.Model):
    url = models.CharField(max_length=100, blank=True, null=True)
    notes = JSONField(blank=True, null=True)

    def __str__(self):
        return self.url
