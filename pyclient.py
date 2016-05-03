from socketIO_client import SocketIO, LoggingNamespace
mensaje="";
with SocketIO('localhost', 3000, LoggingNamespace) as socketIO:
    while(True):
        mensaje=input("Ingrese el mensaje: ")
        socketIO.emit('chat message', mensaje);
        socketIO.wait(seconds=1)

