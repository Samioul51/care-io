import { postUser } from '@/actions/server/auth';

export async function POST(req) {
  try {
    const body = await req.json();
    const res = await postUser(body); 
    return new Response(JSON.stringify(res), { status: 200 });
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ success: false, message: 'Server error' }), { status: 500 });
  }
}
