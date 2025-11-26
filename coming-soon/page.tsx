import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Coming Soon – IntelliLearn Journal',
    description: 'Página de próximamente para IntelliLearn Journal',
};

export default function ComingSoon() {
    return (
        <div className="min-h-screen bg-[#02040a] flex items-center justify-center text-[#f5f5dc] font-body">
            <div className="text-center max-w-xl p-8 bg-[#02040a]/80 rounded-xl border border-[#f5f5dc]/20">
                <h1 className="text-4xl md:text-5xl font-bold mb-6">Próximamente</h1>
                <p className="text-lg mb-4">
                    Estamos trabajando en la versión completa de IntelliLearn Journal. ¡Mantente atento!
                </p>
                <p className="text-sm opacity-70">Mientras tanto, puedes solicitar una demo o ponerte en contacto con nosotros.</p>
            </div>
        </div>
    );
}
