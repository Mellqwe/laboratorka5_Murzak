<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Таблиця множення</title>
    <style>
        table {
            border-collapse: collapse;
            width: 50%;
            margin: 20px auto;
        }

        table, th, td {
            border: 1px solid #000;
            text-align: center;
        }

        th, td {
            padding: 10px;
        }
    </style>
</head>
<body>

    <h2>Таблиця множення</h2>
    <table id="multiplicationTable">
        <thead>
            <tr>
                <th>&times;</th>
                <!-- Заголовки для перших 10 чисел -->
                <script>
                    for (let i = 1; i <= 10; i++) {
                        document.write(`<th>${i}</th>`);
                    }
                </script>
            </tr>
        </thead>
        <tbody>
            <!-- Заповнення тіла таблиці -->
            <script>
                for (let i = 1; i <= 10; i++) {
                    document.write("<tr>");
                    document.write(`<th>${i}</th>`);
                    for (let j = 1; j <= 10; j++) {
                        document.write(`<td>${i * j}</td>`);
                    }
                    document.write("</tr>");
                }
            </script>
        </tbody>
    </table>

</body>
</html>
