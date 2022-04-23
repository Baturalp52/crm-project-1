from django.db import models


class Singleton(models.Model):
    class Meta:
        abstract = True

    def save(self, *args, **kwargs):
        self.pk = 1
        super(Singleton, self).save(*args, **kwargs)

    def delete(self, *args, **kwargs):
        pass

    @classmethod
    def load(cls):
        obj, _ = cls.objects.get_or_create(pk=1)
        return obj


class Settings(Singleton):
    pageTitle = models.TextField(null=True)

    def __str__(self):
        return self.pageTitle


class MessageTemplate(models.Model):
    settings = models.ForeignKey(Settings, on_delete=models.CASCADE, related_name="messageTemplate")
    type = models.IntegerField()
    name = models.CharField(max_length=255)
    template = models.TextField()
