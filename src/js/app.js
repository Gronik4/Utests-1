export default function healthLevel(item) {
    let level = item.health >= 50? 'healthy': item.health >= 15? 'wounded': 'critical';
    return level;
}