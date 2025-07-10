# WorldTeh


Соединение с БД:
файл: \WorldTeh\WorldTeh.Server\appsettings.json:

DefaultConnection": "Server= Slavan\\SQLEXPRESS ;Database=WorldTeh;Trusted_Connection=True;MultipleActiveResultSets=true; TrustServerCertificate=true;"




адрес сервера по умолчанию:
WorldTeh\WorldTeh.Server\Properties\launchSettings.json:

"applicationUrl": "http://localhost:5000"




при изменении адреса сервера также поменять клиента в:
\WorldTeh\Client\src\app\services\employee.service.ts

private apiUrl = 'http://localhost:5000/api/Employees';



адрес для клиента:
C:\Users\Slava\source\repos\WorldTeh\Client\.vscode\launch.json:
"url": "http://localhost:4200"