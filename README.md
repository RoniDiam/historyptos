## Historyptos

# Justificaciones de las decisiones tomadas:
Hice una registración de una compra donde se ingresa la fecha de compra, cantidad de tokens a comprar y que crypto. La crypto a elegir, se "saca" de la API de Coin Gecko donde tiene 100 cryptos con sus precios actuales y más información. 

Al ingresar el token, aparece un texto abajo diciendo el valor actual de esa crypto en particular.

Luego de registrar la compra, te lleva a un panel donde se observa la fecha, monto y crypto de compra. Y las ultimas 2 columnas reflejan el precio del token a la hora de la compra y el valor actual de la crpyto. (info sacada de la API de Coin Gecko).

Las tecnologías usadas para realizar el challenge fue: Node JS como framework, Serverless + React JS. Y usé DynamoDB como gestor de base de datos
