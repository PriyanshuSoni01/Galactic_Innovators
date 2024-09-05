let file = null;

        function handleFileChange(event) {
            file = event.target.files[0];
            const previewContainer = document.getElementById('preview-container');
            if (file) {
                const reader = new FileReader();
                reader.onload = function(e) {
                    previewContainer.innerHTML = `<img src="${e.target.result}" alt="${file.name}" class="w-full h-auto" />`;
                };
                reader.readAsDataURL(file);
            }
        }

        function handleUpload() {
            if (!file) {
                alert('Please select a file.');
                return;
            }

            const UPLOAD_URL = 'https://your-upload-endpoint.com/upload'; // Replace with your actual upload URL
            const formData = new FormData();
            formData.append('image', file);

            fetch(UPLOAD_URL, {
                method: 'POST',
                body: formData,
            })
            .then(response => response.json())
            .then(data => {
                alert('File uploaded successfully!');
                console.log('Success:', data);
            })
            .catch((error) => {
                console.error('Error:', error);
                alert('File upload failed.');
            });
        }

        function handleRemove() {
            file = null;
            document.getElementById('file-input').value = '';
            document.getElementById('preview-container').innerHTML = `
                <svg xmlns="http://www.w3.org/2000/svg" class="w-16 h-16 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V7l-6-4H4z" clip-rule="evenodd"/>
                </svg>
                <p class="text-gray-500">Browse Files to upload</p>
            `;
        }

        function handleUpload() {
            if (!file) {
                alert('Please select a file.');
                return;
            }
        
            const formData = new FormData();
            formData.append('image', file);
        
            fetch('/upload', {
                method: 'POST',
                body: formData,
            })
            .then(response => response.json())
            .then(data => {
                alert('File uploaded and processed successfully!');
                document.getElementById('output-image').src = data.imageUrl;
                document.getElementById('output-image').style.display = 'block';
            })
            .catch((error) => {
                console.error('Error:', error);
                alert('File upload failed.');
            });
        }

        var swiper = new Swiper(".mySwiper", {
            direction: "vertical",
            slidesPerView: 1,
            spaceBetween: 30,
            mousewheel: true,
            pagination: {
              el: ".swiper-pagination",
              clickable: true,
            },
          });