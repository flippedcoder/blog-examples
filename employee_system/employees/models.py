from django.db import models

class EmergencyContact(models.Model):
    contact_name = models.CharField(max_length=200)
    contact_number = models.CharField(max_length=10)
    def __str__(self):
        return self.contact_name


class Status(models.Model):
    emergency_contact = models.ForeignKey(EmergencyContact, on_delete=models.CASCADE)
    status_code = models.CharField(max_length=3)
    start_date = models.DateTimeField('date added')
    def __str__(self):
        return self.status_code
