$(document).ready(function() {
    // Initialize an empty array to store selected amenity IDs
    var selectedAmenities = [];

    // Listen for changes on each input checkbox tag
    $('.amenity-checkbox').change(function() {
        var amenityId = $(this).closest('li').data('id');
        var amenityName = $(this).closest('li').data('name');

        if (this.checked) {
            // Add the Amenity ID to the selectedAmenities array if the checkbox is checked
            selectedAmenities.push(amenityId);
        } else {
            // Remove the Amenity ID from the selectedAmenities array if the checkbox is unchecked
            var index = selectedAmenities.indexOf(amenityId);
            if (index !== -1) {
                selectedAmenities.splice(index, 1);
            }
        }

        // Update the h4 tag inside the div Amenities with the list of Amenities checked
        var amenitiesText = selectedAmenities.map(function(id) {
            return $('li[data-id="' +

~             
