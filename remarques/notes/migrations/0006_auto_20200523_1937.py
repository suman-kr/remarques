# Generated by Django 2.2.10 on 2020-05-23 14:07

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('notes', '0005_auto_20200523_1537'),
    ]

    operations = [
        migrations.AlterField(
            model_name='notepad',
            name='url',
            field=models.CharField(blank=True, max_length=100, null=True, unique=True),
        ),
    ]