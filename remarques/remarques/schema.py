from graphene import Schema, ObjectType

class Query(ObjectType):
    pass

schema = Schema(query=Query)