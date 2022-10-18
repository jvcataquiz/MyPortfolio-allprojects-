$('#myModal').on('show.bs.modal', function (event) {
  var button = $(event.relatedTarget) 
  var recipient = button.data('whatever')
  var modal = $(this)

  const data = {
    "Cert1" :`<iframe src="https://drive.google.com/file/d/11QZAawz8z-1B4MPPRdOWAXT_d9F2Ru-0/preview" width="100%"  class="frameheight" allow="autoplay"></iframe>`,
    "Python1": `<iframe src="https://drive.google.com/file/d/1Y3MB_LFDkwNwTs2yGrLxUTw0-vGeJFOR/preview" width="100%"  class="frameheight" allow="autoplay"></iframe>`,
    "Python2": `<iframe src="https://drive.google.com/file/d/1Y5c6EKR6C6m4EDGKil_w1mXj0upOoZwY/preview" width="100%"  class="frameheight" allow="autoplay"></iframe>`,
    "Python3": `<iframe src="https://drive.google.com/file/d/1YXyohhu36uezgfZl5YHNIIYCadruEkjD/preview" width="100%"  class="frameheight" allow="autoplay"></iframe>`,
    "Python4": `<iframe src="https://drive.google.com/file/d/1YNKAH3DSt1-zc92ckuW-NO5aJ8u63wUD/preview" width="100%"  class="frameheight" allow="autoplay"></iframe>`,
    "Python5": `<iframe src="https://drive.google.com/file/d/1iIbEMBpvdy-iCy-zKGmzIBKBPIQHG9Cc/preview" width="100%"  class="frameheight" allow="autoplay"></iframe>`,
    "Python6": `<iframe src="https://drive.google.com/file/d/1NdKV1K1B6ChmuMT_5PcA9i9-wWJ6pjKs/preview" width="100%"  class="frameheight" allow="autoplay"></iframe>`,
    "Python7": `<iframe src="https://drive.google.com/file/d/1ZxtcwJpcTTYKKAyJR0LiJ_XKaa11vKY9/preview" width="100%" class="frameheight" allow="autoplay"></iframe>`,
    "Web1": `<iframe src="https://drive.google.com/file/d/1Zmcu6GHJHzPIHbhcCry-Qbs8meSZn4U_/preview" width="100%"  class="frameheight" allow="autoplay"></iframe>`,
    "Web2": `<iframe src="https://drive.google.com/file/d/1Zb1q9MiPMagtWZqXRNZsqxvVQHZlzqRZ/preview" width="100%"  class="frameheight" allow="autoplay"></iframe>`,
    "Web3": `<iframe src="https://drive.google.com/file/d/1Ypx1NspB9vaTuXGNEhxZ8zc4Sp7FeOpW/preview" width="100%"  class="frameheight" allow="autoplay"></iframe>`,
    "Web4": `<iframe src="https://drive.google.com/file/d/1Z-1BBUSX3ZtcMqBOEqf_p9KnNOdiq2N3/preview" width="100%"  class="frameheight" allow="autoplay"></iframe>`,
    "Web5": `<iframe src="https://drive.google.com/file/d/1T2Oc04MtFZjN3kpykaW94JaGxUjoYkkY/preview" width="100%"  class="frameheight" allow="autoplay"></iframe>`,
    "Web6": `<iframe src="https://drive.google.com/file/d/1_N0tABe2P5xhhgzpskAjAMp9QFvcn6jJ/preview" width="100%"  class="frameheight" allow="autoplay"></iframe>`,
    "free1": `<iframe src="https://drive.google.com/file/d/1J_e_RWSNwHnIizWoW6hTzPJ_-z8Xw6Yh/preview" width="100%"  class="frameheight" allow="autoplay"></iframe>`,
    "free2": `<iframe src="https://drive.google.com/file/d/1mm6qWG2yw-l0vCA1-34hrIsGBRZk_wSF/preview" width="100%"  class="frameheight" allow="autoplay"></iframe>`
    
  }

  var datavalue = data[recipient]
  // modal.find('.modal-title').text(recipient + ' Certificate' )
  modal.find('.modal-body').html(datavalue)

})