<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="f2.css">
    <link rel="icon" href="Ape_Gang.png">
    <title>Water Tracker</title>
</head>

<body>
    <main class="container d-flex">
        <section class="left">
            <div class="col d-flex">
                <h1 class="drinked-water"><span class="value-drinked-water">1344</span> <span
                        class="unit-target">ml</span></h1>
                <p class="drink-target">Your target is <span class="value-target">----</span> <span
                        class="unit-drinked-water">ml</span></p>
                <div class="drop-container">
                    <div class="drop">
                        <div class="water"></div>
                    </div>
                    <span class="plus d-flex">
                        <span class="details-plus">250 ml</span>
                        <img src="plus.svg" alt="">
                    </span>
                </div>
            </div>
        </section>
        <section class="right">
            <div class="col">
                <ul class="dishes">
                    <li class="dish d-flex">
                        <p class="dish-volume">100</p>
                        <span>ml</span>
                    </li>
                    <li class="dish d-flex">
                        <p class="dish-volume">250</p>
                        <span>ml</span>
                    </li>
                    <li class="dish d-flex">
                        <p class="dish-volume">500</p>
                        <span>ml</span>
                    </li>
                    <li class="dish d-flex">
                        <p class="dish-volume">1500</p>
                        <span>ml</span>
                    </li>
                </ul>
                <div class="setting">
                    <label for="value-target" class="value-target-label">Set your target:</label>
                    <div class="set-target">
                        <input type="number" name="" id="value-target" oninput="setTarget()">
                        <select name="" id="unit-target">
                            <option value="ml">ml</option>
                        </select>
                    </div>
                </div>
            </div>
        </section>
    </main>

    <script src="f2.js"></script>
</body>

</html>