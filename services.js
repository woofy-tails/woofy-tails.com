<!DOCTYPE html>
    <html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Product Selling Website</title>
        <link rel="stylesheet" type="text/css" href="services.css">
    </head>

    <body>



        <nav class="navbar background">
            <ul class="nav-list">
                <div class="logo"><img src="img/WhatsApp Image 2023-11-14 at 14.26.59_5a7be85d.jpg" alt="logo"></div>
                <li><a href="#home">Home</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
            <div class="rightNav">
                <input type="text" name="search" id="search">
                <button class="btn btn-sm" onclick="toggleDisplay()">search</button>

            </div>
        </nav>
        <style>
            .modal-content {
                display: none;
            }
        </style>


        <h2>Welcome to our Store</h2>

        <div class="product-container" id="main-div" >
            <div class=" product">
                <img src="product1.jpg" alt="Product 1">
                <h3>NUTRITION AND DIET PACKAGE</h3>
                <p>Offers personalized nutrition consultations and diet plans, helps pets maintain optimal health through
                    proper nutrition.
                </p>
                <p>Price:Rs 2999/- per month</p>
                <button class="add-to-cart" onclick="addToCart('NUTRITION AND DIET PACKAGE', 2999)">Add to Cart</button>
            </div>

            <div class="product">
                <img src="product2.jpg" alt="Product 2">
                <h3>PET SITTING AND BOARDING PACKAGE</h3>
                <p>Combines pet sitting or boarding services. This may include daily updates, playtime and accommodations.
                    It provides peace of mind to pet owners when they are away. </p>
                <p>Price:Rs 199/- per hour </p>
                <button class="add-to-cart" onclick="addToCart('PET SITTING AND BOARDING PACKAGE',199)">Add to Cart</button>
            </div>

            <div class="product">
                <img src="product3.jpg" alt="Product 3">
                <h3>PUPPY/KITTEN CARE PACKAGE</h3>
                <p>It is designed for new pet owners. It provides vaccination schedules, spaying/neutering, diet
                    reccomendations, basic training sessions and offers a comprehensive start to pet parenthood. </p>
                <p>Price:Rs 1199/- per month</p>
                <button class="add-to-cart" onclick="addToCart('PUPPY/KITTEN CARE PACKAGE',1199)">Add to Cart</button>
            </div>

            <div class="product">
                <img src="product4.jpg" alt="Product 4">
                <h3>SENIOR PET CARE PACKAGE </h3>
                <p>It is for older pets with specific health needs. It also provides with geriatric health check-ups, joint
                    supplements, specialized diet reccomendations. It also aids in maintaining the health and comfort of
                    aging pets.</p>
                <p>Price:Rs 1999/- per month</p>
                <button class="add-to-cart" onclick="addToCart('SENIOR PET CARE PACKAGE',1999)">Add to Cart</button>
            </div>
            <div class="product">
                <img src="product5.jpg" alt="Product 5">
                <h3>GROOMING AND SPA PACKAGE</h3>
                <p>It facilitates baths, haircuts, nail trims, additional spa services like massages or aromatherapy. It is
                    ideal for pet owners who want their pets to look and feel their best. </p>
                <p>Price:Rs 1999/- per month</p>
                <button class="add-to-cart" onclick="addToCart('GROOMING AND SPA PACKAGE',1999)">Add to Cart</button>
            </div>


            <div class="product">
                <img src="product6.jpg" alt="Product 6">
                <h3>TRAINING AND SOCIALIZING PACKAGE </h3>
                <p>It provides obedience training sessions, socialization classes, behavior consultations. It also helps
                    puppies and dogs develop good behaviour and social skills. It is suitable for pet owners with energetic
                    or young dogs.</p>
                <p>Price:Rs 1499/- per month</p>
                <button class="add-to-cart" onclick="addToCart('TRAINING AND SOCIALIZING PACKAGE',1499)">Add to
                    Cart</button>
            </div>

            <div class="product">
                <img src="product7.jpg" alt="Product 7">
                <h3>WELLNESS PACKAGE</h3>
                <p>It provides with regular veterinary check-ups, vaccinations, preventive treatements, dental cleanings,
                    screenings for common health issues. It is ideal for pet owners who want to ensure their pets ongoing
                    health.</p>
                <p>Price:Rs 699/- per month</p>
                <button class="add-to-cart" onclick="addToCart('WELLNESS PACKAGE',699)">Add to Cart</button>
            </div>

            <div class="product">
                <img src="product8.jpg" alt="Product 8">
                <h3>COMPLETE PET CARE MEMBERSHIP </h3>
                <h3>(WOOF PACKAGE)</h3>
                <p>It offers all inclusive access to various services like grooming, veterinary care, training and boarding.
                    It also provides customisation and personilasation in form of Pet Card issued by relationship managers
                    and event planning for dog recretional activities.</p>
                <p>Price:Rs 4999/- per month</p>
                <button class="add-to-cart" onclick="addToCart('COMPLETE PET CARE MEMBERSHIP',4999)">Add to Cart</button>
            </div>
        </div>
        <div class="notification" id="notification"></div>
        <div class="cart-toggle" onclick="toggleCart()">CART</div>

        <div class="modal-content" id="cart-modal">
            <span class="close" onclick="closeCartModal()">&times;</span>
            <h2>Shopping Cart</h2>
            <ul id="cart-items"></ul>
            <p id="total-price">Total Price: $0.00</p>
            <button onclick="checkout()">Checkout</button>
        </div>

        <script src="services.js"></script>
        










    </body>

    </html>