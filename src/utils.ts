export const whatsAppLink = `https://api.whatsapp.com/send/?phone=5130244323&text=Olá, vim pelo site!&type=phone_number&app_absent=0`;

export const contactNumber = "51 3024 4323";
export const email = 'contato@arctronic.com.br';
export const address = `Rua Dom Diogo de Souza, 649
Cristo Redentor – Porto Alegre – RS
`;

const api = `https://arctronic-com-br-backend.vercel.app`; 
const endpoint = `email`

export const primaryOrange = "#f8a51b";
export const primaryBackground = "#1a1a1a";
export const sendEmail = async (
  name: string,
  email: string,
  phone: string,
  subject: string,
  message: string
) => {
    try{ 
        const response = await fetch(`${api}/${endpoint}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                name,
                email,
                phone,
                subject,
                message
            })
        });
        return response.status;
    } catch (error) {
        console.log(error);
    }
};