from django.urls import path
from . import views

urlpatterns =[
    path('notes/',views.CreateNoteView.as_view(), name='create-note'),
    path('notes/delete/<int:pk>', views.NoteDelete.as_view(), name='delete-note'),
]