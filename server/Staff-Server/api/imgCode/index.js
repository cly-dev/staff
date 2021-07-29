const svgCaptcha=require("svg-captcha");
function SvgCode(size='',ignoreChars='',noise=1,color=false,background=''){
    const svg=svgCaptcha.create({
        size,
        ignoreChars,
        noise,
        color,
        background
    });
    return svg
}


module.exports= SvgCode;