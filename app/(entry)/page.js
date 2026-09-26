'use client';
import { useEffect } from 'react';
import { sitePath } from '../../lib/site-path';
export default function EntryPage() {
 useEffect(() => { window.location.replace(sitePath('/es/')); }, []);
 return <main style={{padding:'4rem',fontFamily:'Arial,sans-serif'}}><h1>Arq. Diana G. Piñanez</h1><p><a href={sitePath('/es/')}>Entrar al sitio</a></p></main>;
}
