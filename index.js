const images=[
    "https://imgs.search.brave.com/_ImNc4ncWTXHFQuJEDllZADXi2yo8OqSR2ZgWoVCrWA/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jZG4u/d2FsbHBhcGVyc2Fm/YXJpLmNvbS8yOC83/Mi9ZNExic2EuanBn",
    "https://imgs.search.brave.com/RJYy0WLAX8zlMiiyb1rlHF5Hb47dP7lDjTDVGMEk-vg/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jZG4u/d2FsbHBhcGVyc2Fm/YXJpLmNvbS8zLzgz/L1d5R3M2WC5qcGc",
    "https://imgs.search.brave.com/-wdKOawAD3smi0D-tQOCId_fMZYp9c9Kvks3xB7WfDs/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXQuY29t/L3cvZnVsbC82L2Iv/ZS82MDc2ODgtMTky/MHgxMDgwLWRlc2t0/b3AtZnVsbC1oZC1z/cG9ydHMtY2FyLWJh/Y2tncm91bmQtcGhv/dG8uanBn",
    "https://imgs.search.brave.com/jT1wBUS61ORrbY-RNV1N_EvdyYxM8WpLyeS1rpbRmfM/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXItaG91c2Uu/Y29tL2RhdGEvb3V0/Lzcvd2FsbHBhcGVy/MnlvdV8xNzc5NzAu/anBn",
    "https://imgs.search.brave.com/egh-zbV3ZrmLTQsA6UNLD3NVHPVMT6joZR2Ts4YglZk/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXZlLmNv/bS93cC9jQWt6N3Jm/LmpwZw",
    "https://imgs.search.brave.com/RJYy0WLAX8zlMiiyb1rlHF5Hb47dP7lDjTDVGMEk-vg/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jZG4u/d2FsbHBhcGVyc2Fm/YXJpLmNvbS8zLzgz/L1d5R3M2WC5qcGc",
    "https://imgs.search.brave.com/RJYy0WLAX8zlMiiyb1rlHF5Hb47dP7lDjTDVGMEk-vg/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jZG4u/d2FsbHBhcGVyc2Fm/YXJpLmNvbS8zLzgz/L1d5R3M2WC5qcGc"

]
console.log(images.length)
let current=0;
// let image1=document.getElementById("image1")
// console.log(image1.src)
function showImage(){
  const img= document.getElementById("image1")
  img.src=images[current]
   console.log(img.src)
}

function nextImage(){
    current=(current+1)%images.length
    console.log(current)
    showImage()
}

function PrevImage(){
    
    
        current=(current-1 + images.length)%images.length
        console.log(current)
    
    
    showImage()

}
window.onload=showImage
