// src/utils/send-email.ts
export interface EmailData {
  name: string;
  email: string;
  message: string;
}

export async function sendEmail(data: EmailData): Promise<void> {
  // En desarrollo, mostramos los datos en consola
  console.log('Datos del formulario de contacto:', data);
  
  // Simulamos un retraso de red
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Simulamos un 80% de éxito y 20% de error
      if (Math.random() > 0.2) {
        console.log('Email enviado con éxito (simulado)');
        resolve();
      } else {
        console.log('Error al enviar email (simulado)');
        reject(new Error('Error sending email'));
      }
    }, 1500);
  });
}