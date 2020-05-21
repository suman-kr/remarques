from graphene import Schema, ObjectType, List
from notes.models import Notepad
from graphene_django.types import DjangoObjectType
from graphene.relay import Node
from graphene_django.filter import DjangoFilterConnectionField


class NotesNode(DjangoObjectType):
    class Meta:
        model = Notepad
        filter_fields = {
            'id': ['exact'],
            'url': ['icontains'],
        }
        interfaces = (Node,)
        fields = '__all__'


class Query(ObjectType):
    note = Node.Field(NotesNode)
    all_notes = DjangoFilterConnectionField(NotesNode)


schema = Schema(query=Query)
