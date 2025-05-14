function sendMap() {
    const address = document.getElementById("address").value.trim();

    if (address === "") {
        alert("Please enter an address.");
        return;
    }

    // Generate the map URL
    const mapUrl = `https://maps.google.com/?q=${encodeURIComponent(address)}`;

    // Check if the Web Share API is supported
    if (navigator.share) {
        navigator.share({
                title: "Check out this location",
                text: `Here's the map location for: ${address}`,
                url: mapUrl,
            })
            .then(() => console.log("Map shared successfully!"))
            .catch((error) => console.error("Error sharing map:", error));
    } else {
        alert("Your browser doesn't support direct sharing. Please copy the link manually.");
    }

    // Show status message
    document.getElementById("status").classList.remove("hidden");
}