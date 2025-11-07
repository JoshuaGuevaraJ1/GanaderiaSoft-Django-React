from django.db import models

# Create your models here.
class Category(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = 'Category'
        verbose_name_plural = 'Categories'

class Breed(models.Model):
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    breed = models.CharField(max_length=100)

    def __str__(self):
        return self.breed
    
    class Meta:
        verbose_name = "Breed"
        verbose_name_plural = "Breeds"

class Animal(models.Model):
    rfid = models.CharField(max_length=100, unique=True)
    name = models.CharField(max_length=100, null=True)
    breed = models.ForeignKey(Breed, on_delete=models.SET_NULL, null=True)
    sex = models.CharField(choices=[('Male', 'Male'), ('Female', 'Female')], max_length=100, null=True)
    age = models.IntegerField(null=True)
    weight = models.FloatField(null=True)
    arrival = models.DateField(auto_now_add=True, null=True)
    status = models.CharField(choices=[('Alive', 'Alive'), ('Dead', 'Dead')], max_length=100, null=True)
    departure = models.DateField(null=True)
    observations = models.TextField(null=True)

    def get_breed(self):
        return self.breed

    def __str__(self):
        return self.rfid

    class Meta:
        verbose_name_plural = "Animals"
