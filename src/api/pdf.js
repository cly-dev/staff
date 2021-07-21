import html2canvas from "html2canvas";
import JsPDF from "jspdf";
export default function getDownload(){
    const canvasData=document.querySelector("#psf-prient");
    html2canvas(canvasData,{
        allowTaint:true,
        scale:4,
        dpi:window.devicePixelRatio*4}).then(canvas=>{
            let contentWeight=canvas.width;
            let contentHeight=canvas.height;
            let pageHeight=contentWeight / 592.28 * 841.89;
            let leftHeight=contentHeight;
            let position=0;
            let imgWidth=595.28;
            let imgHeight=592.28 / contentWeight * contentHeight;
            let pageData=canvas.toDataURL("image/jpeg",1.0);
            let pdf=new JsPDF('','pt','a4');
            if (leftHeight < pageHeight) {
                pdf.addImage(pageData, 'JPEG', 0, 0, imgWidth, imgHeight);
              } else {
                while (leftHeight > 0) {
                  pdf.addImage(pageData, 'JPEG', 0, position, imgWidth, imgHeight);
                  leftHeight -= pageHeight;
                  position -= 841.89;
                  // 避免添加空白页
                  if (leftHeight > 0) {
                    pdf.addPage();
                  }
                }
              }
            pdf.save('报表'+'.pdf');
        })
        return canvasData;
}
