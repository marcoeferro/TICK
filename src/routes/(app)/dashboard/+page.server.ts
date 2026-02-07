import type { PageServerLoad, Actions } from './$types';
import { error } from '@sveltejs/kit';

export const load: PageServerLoad = async ({ locals }) => {
	if (!locals.user) throw error(401, 'Unauthorized');
	return {
		user: locals.user,
		timestamp: new Date().toISOString()
	};
};

export const actions: Actions = {
	default: async ({ request }) => {
		const formData = await request.formData();
		// TigerStyle: Process logic here
		return { success: true };
	}
};