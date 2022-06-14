// alert('This is working')
$(window).on('load', function() {
    $.ajax({
        url: '/listing',
        type: "GET",
        dataType: "JSON",
        success: function(data) {
            // alert('We got the data')
            $.each(data, function(key, value) {
                $('.listOurData').append(
                    '<div class="col-lg-12"><div class="atbd_single_listing atbd_listing_list"><article class="atbd_single_listing_wrapper"><figure class="atbd_listing_thumbnail_area"><div class="atbd_listing_image">' +
                    '<a href=""> <img src="img/p1.jpg" alt="listing image"></a></div><!-- ends: .atbd_listing_image --><div class="atbd_thumbnail_overlay_content"><ul class="atbd_upper_badge">' +
                    ' <li><span class="atbd_badge atbd_badge_featured">' + value.tag + '</span> </li>' +
                    '       </ul><!-- ends .atbd_upper_badge --> ' +
                    '  </div><!-- ends: .atbd_thumbnail_overlay_content -->' +
                    '  </figure><!-- ends: .atbd_listing_thumbnail_area -->' +
                    '   <div class="atbd_listing_info">' +
                    '     <div class="atbd_content_upper">' +
                    '       <h4 class="atbd_listing_title">' +
                    '        <a href="">' + value.name + '</a>' +
                    '  </h4>' +
                    ' <div class="atbd_listing_meta">' +
                    '   <span class="atbd_meta atbd_listing_rating">' + value.rating + '.0<i' +
                    '           class="la la-star"></i></span>' +
                    ' <span class="atbd_meta atbd_listing_price">$' + value.price + '.00</span>' +
                    ' <span class="atbd_meta atbd_badge_open">Open Now</span>' +
                    ' </div><!-- End atbd listing meta -->' +
                    '    <div class="atbd_listing_data_list">' +
                    ' <ul><li><p><span class="la la-map-marker"></span>' + value.location + '</p>' +
                    '   </li>' +
                    ' <li>' +
                    '   <p><span class="la la-phone"></span>(415)' + value.phone +
                    ' </p>' +
                    '   </li>' +
                    '   <li>' +
                    '            <p><span class="la la-calendar-check-o"></span>Posted 2 months ago</p>' +
                    '                             </li>' +
                    '                         </ul>' +
                    '                     </div><!-- End atbd listing meta --> ' +
                    '                 </div><!-- end .atbd_content_upper -->' +
                    '                 <div class="atbd_listing_bottom_content">' +
                    '                     <div class="atbd_content_left">' +
                    '                         <div class="atbd_listing_category">' +
                    '                             <a href=""><span' +
                    '                                     class="la la-glass"></span>Restaurant</a>' +
                    '                         </div>' +
                    '                     </div>' +
                    '                     <ul class="atbd_content_right">' +
                    '                         <li class="atbd_count"><span' +
                    '                                 class="la la-eye"></span>' + value.seen + '+</li>' +
                    '                         <li class="atbd_save">' +
                    '                             <span class="la la-heart-o"></span>' +
                    '                         </li>' +
                    '                         <li>' +
                    '                             <div class="atbd_author atbd_author--thumb">' +
                    '                                 <a href="">' +
                    '                                     <img src="img/author-thumb2.jpg" alt="Author Image">' +
                    '                                     <span class="custom-tooltip">Jeffery A, Owner</span>' +
                    '                                 </a>' +
                    '                             </div>' +
                    '                         </li>' +
                    '                     </ul>' +
                    '                 </div><!-- end .atbd_listing_bottom_content -->' +
                    '             </div><!-- ends: .atbd_listing_info -->' +
                    '         </article><!-- atbd_single_listing_wrapper -->' +
                    '     </div>' +
                    ' </div><!-- ends: .col-lg-12 -->'
                )
            })
        },
        error: function(error) {
            alert('There was an error')
        }
    })
});