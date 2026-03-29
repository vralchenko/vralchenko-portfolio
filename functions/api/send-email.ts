interface Env {
    RESEND_API_KEY: string;
}

export const onRequestPost: PagesFunction<Env> = async (context) => {
    const { name, email, message } = await context.request.json<{
        name: string;
        email: string;
        message: string;
    }>();

    try {
        const res = await fetch("https://api.resend.com/emails", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${context.env.RESEND_API_KEY}`,
            },
            body: JSON.stringify({
                from: "Portfolio Contact <onboarding@resend.dev>",
                to: "vralchenko@gmail.com",
                subject: `New message from ${name} via Portfolio`,
                reply_to: email,
                html: `
                    <p>You have a new message from your portfolio contact form:</p>
                    <p><strong>Name:</strong> ${name}</p>
                    <p><strong>Email:</strong> ${email}</p>
                    <p><strong>Message:</strong></p>
                    <p>${message}</p>
                `,
            }),
        });

        if (!res.ok) {
            const error = await res.text();
            return Response.json({ success: false, error }, { status: 500 });
        }

        return Response.json({ success: true });
    } catch (error) {
        return Response.json({ success: false, error: String(error) }, { status: 500 });
    }
};
