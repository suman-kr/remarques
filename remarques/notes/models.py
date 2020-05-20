from django.db import models
from django.contrib.postgres.fields import JSONField
# Create your models here.
class notepad(models.Model):
    url = models.CharField(max_length=100)
    notes = JSONField()

    def __str__(self):
        return self.url
