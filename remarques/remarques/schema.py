from graphene import Schema, ObjectType, List, Mutation, String, JSONString, InputObjectType, ID, Mutation, Field
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
class NotesInput(InputObjectType):
    id = ID()
    url = String()
    notes = JSONString()

class CreateNotes(Mutation):
    class Arguments:
        input = NotesInput(required=True)

    notes = Field(NotesNode)
    @staticmethod
    def mutate(root, info, input=None):
        notes_instance = Notepad(url=input.url, notes=input.notes)
        notes_instance.save()
        return CreateNotes(notes=notes_instance)
    
class Mutation(ObjectType):
    create_notes = CreateNotes.Field()

class Query(ObjectType):
    note = Node.Field(NotesNode)
    all_notes = DjangoFilterConnectionField(NotesNode)


schema = Schema(query=Query, mutation=Mutation)
