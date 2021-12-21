import Service from '@/services/Service.js'

const resource = 'posts'

export default {
	get() {
		return Service.get(resource)
	}
}