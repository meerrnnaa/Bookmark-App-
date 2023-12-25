
        function addBookmark() {
            var bookmarkName = document.getElementById('bookmarkName').value;
            var url = document.getElementById('url').value;

            // Validate URL
            if (!isValidUrl(url)) {
                alert("Invalid URL. Please make sure the URL starts with 'https://' or 'http://'");
                return;
            }

            // Check for duplicate bookmark names
            var existingBookmarkNames = Array.from(document.querySelectorAll('#bookmarkList td:first-child')).map(td => td.textContent);
            if (existingBookmarkNames.includes(bookmarkName)) {
                alert("Bookmark name already exists. Please choose a different name.");
                return;
            }

            // Add bookmark to the table
            var table = document.getElementById('bookmarkList');
            var row = table.insertRow();
            var cell1 = row.insertCell(0);
            var cell2 = row.insertCell(1);
            var cell3 = row.insertCell(2);
            cell1.textContent = bookmarkName;
            cell2.textContent = url;
            cell3.innerHTML = '<button class="visit" onclick="visitBookmark(\'' + url + '\')">Visit</button> <button class="delete" onclick="deleteBookmark(this)">Delete</button>';

            // Clear input fields
            document.getElementById('bookmarkName').value = '';
            document.getElementById('url').value = '';
        }

        function visitBookmark(url) {
            window.open(url, '_blank');
        }

        function deleteBookmark(button) {
            var row = button.parentNode.parentNode;
            row.parentNode.removeChild(row);
        }

        function isValidUrl(url) {
            var pattern = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i;
            return pattern.test(url);
        }
    