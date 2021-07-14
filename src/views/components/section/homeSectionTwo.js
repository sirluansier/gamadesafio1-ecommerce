import backgroundTwo from '../../../assets/images/background/bg2.png';
import miranha2 from '../../../assets/images/elements/miranha2.png';
import footer from '../footer';
import send from '../../../assets/images/elements/btn.png';


let HomeSectionTwo = `
   <section id="section-two" class="section background--two" style="background-image: url(${backgroundTwo})">
        <div class="container block-section--two">
        <img src="${miranha2}" alt="miranha-funko" width="350px" height="auto">
            <div class="text-block--two">
                <p class="label-input">OI, AMIGO! QUAL O SEU EMAIL?</p>
                <input id="email-input" class="email-input" type="email" placeholder="Seu email">
                <button type="button" id="send-email" onclick="cadastraEmail()" class="btn-send"><img class="img-btn" src="${send}"></button>
            </div>
        </div>
    </section>
    ${footer}
 
`

export default HomeSectionTwo;