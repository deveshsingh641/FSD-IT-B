fetch('https://dummyjson.com/recipes')
            .then(response => response.json())
            .then(data => {
                const tableBody = document.querySelector('#recipesTable tbody');
                let srNo = 1; // Serial number
                let price=100;
                
                data.recipes.forEach(recipe => {
                    const row = document.createElement('tr');

                    // Insert Sr. No
                    const srCell = document.createElement('td');
                    srCell.textContent = srNo++;
                    row.appendChild(srCell);

                    // Insert Recipe Name
                    const nameCell = document.createElement('td');
                    nameCell.textContent = recipe.name ;
                    row.appendChild(nameCell);

                    // Insert Image
                    const imgCell = document.createElement('td');
                    const img = document.createElement('img');
                    img.src = recipe.image || '';
                    img.alt = recipe.title || 'No Image';
                    imgCell.appendChild(img);
                    row.appendChild(imgCell);

                    // Insert Rating
                    const ratingCell = document.createElement('td');
                    ratingCell.textContent = recipe.rating || "N/A";
                    row.appendChild(ratingCell);

                    // Insert Price
                    const priceCell = document.createElement('td');
                    priceCell.textContent = price;

                    row.appendChild(priceCell);
                    price=price+10;

                    // Add row to table
                    tableBody.appendChild(row);
                });
            })
            .catch(error => {
                console.error("Error fetching data:", error);
            });