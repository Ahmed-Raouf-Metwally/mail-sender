const nodemailer = require( "nodemailer" );
const sgMail = require( '@sendgrid/mail' )


const sendEMail = async ( req, res ) =>
{
    const testAccount = nodemailer.createTestAccount() 
    const transporter = nodemailer.createTransport( {
        host: 'smtp.ethereal.email',
        port: 587,
        auth: {
            user: 'kenny.crooks@ethereal.email',
            pass: 'VKbb3w7VQxuGScUKge'
        }
    } );
    const info = await transporter.sendMail( {
        from: '"Maddison Foo Koch 👻" <maddison53@ethereal.email>', // sender address
        to: "bar@example.com, baz@example.com", // list of receivers
        subject: "Hello ✔", // Subject line
        html: "<h2>Hello world?</h2>", // html body
    } );

    res.json(info );
}
// sendGride 
const sendMail = async ( req, res ) =>
{
    sgMail.setApiKey( process.env.SENDGRID_API_KEY )
    const msg = {
        to: 'ahmedraouf.metwally0@gmail.com', // Change to your recipient
        from: 'ahmedraouf.metwally@gmail.com', // Change to your verified sender
        subject: 'Sending with SendGrid is Fun',
        text: 'and easy to do anywhere, even with Node.js',
        html: '<strong>and easy to do anywhere, even with Node.js</strong>',
    }
    const info = await sgMail.send( msg );
    // sgMail
    //     .send( msg )
    //     .then( () =>
    //     {
    //         console.log( 'Email sent' )
    //     } )
    //     .catch( ( error ) =>
    //     {
    //         console.error( error )
    //     } )
    
    res.json (info );
}

module.exports = sendMail;