
import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { email } = await req.json();
    
    if (!email) {
      return new Response(
        JSON.stringify({ error: 'Email is required' }),
        { 
          status: 400, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      );
    }

    // Extended list of temporary email domains
    const tempDomains = [
      '10minutemail.com', 'guerrillamail.com', 'mailinator.com', 
      'tempmail.org', 'yopmail.com', 'temp-mail.org', 'throwaway.email',
      'maildrop.cc', 'mohmal.com', 'sharklasers.com', 'getnada.com',
      'tempail.com', 'dispostable.com', 'mailtemp.info', '10minutemail.net',
      'throwawaymail.com', 'fakemailgenerator.com', 'mailcatch.com',
      'trashmail.org', 'tempinbox.com', 'meltmail.com'
    ];

    const domain = email.toLowerCase().split('@')[1];
    const isTempEmail = tempDomains.includes(domain);

    console.log(`Email validation check: ${email}, Domain: ${domain}, Is temp: ${isTempEmail}`);

    return new Response(
      JSON.stringify({ isTemporary: isTempEmail }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    );

  } catch (error) {
    console.error('Error validating email:', error);
    return new Response(
      JSON.stringify({ error: 'Internal server error' }),
      { 
        status: 500, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    );
  }
});
