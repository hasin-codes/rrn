'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  PenTool, 
  Image, 
  Sparkles, 
  Save, 
  Eye, 
  Edit, 
  Trash2, 
  Calendar,
  Heart,
  MessageCircle,
  Share2,
  Upload,
  Wand2
} from 'lucide-react';

interface Story {
  id: string;
  title: string;
  content: string;
  excerpt: string;
  imageUrl?: string;
  createdAt: string;
  updatedAt: string;
  status: 'draft' | 'published';
  likes: number;
  comments: number;
  views: number;
}

export default function MyStoriesPage() {
  const [activeTab, setActiveTab] = useState('editor');
  const [isEditing, setIsEditing] = useState(false);
  const [isAIPolishing, setIsAIPolishing] = useState(false);
  
  // Editor state
  const [currentStory, setCurrentStory] = useState({
    title: '',
    content: '',
    imageUrl: ''
  });

  // Mock stories data
  const [stories, setStories] = useState<Story[]>([
    {
      id: '1',
      title: 'My First 10K: A Journey of Perseverance',
      content: `# My First 10K: A Journey of Perseverance

Running has always been a challenge for me. As someone who struggled with endurance sports, the idea of completing a 10K race seemed impossible. But last Saturday, I crossed that finish line with tears of joy streaming down my face.

## The Training Journey

The road to this moment wasn't easy. I started with just 1K runs, gasping for breath and questioning my decision. But with each week, I pushed myself a little further. The support from the RunRise Nation community was incredible - every encouraging comment and training tip made a difference.

## Race Day

The morning of the race was filled with nervous energy. As I stood at the starting line, surrounded by hundreds of other runners, I realized this was about more than just running - it was about proving to myself that I could do anything I set my mind to.

Crossing that finish line in 1:02:34 was one of the proudest moments of my life. The sense of accomplishment was overwhelming, and I knew this was just the beginning of my running journey.`,
      excerpt: 'The story of how I overcame my fears and completed my first 10K race, proving that with determination and community support, anything is possible.',
      imageUrl: '/api/placeholder/400/200',
      createdAt: '2024-02-15',
      updatedAt: '2024-02-15',
      status: 'published',
      likes: 24,
      comments: 8,
      views: 156
    },
    {
      id: '2',
      title: 'Trail Running in the Mountains',
      content: `# Trail Running in the Mountains

There's something magical about running on mountain trails. The crisp air, the sound of your footsteps on dirt paths, and the breathtaking views make every step worth it.

## The Challenge

Trail running is completely different from road running. The uneven terrain, elevation changes, and technical sections require a different kind of focus and strength. But the rewards are incredible.

## The Experience

Last weekend's mountain trail run was one of the most challenging yet rewarding experiences of my running journey. The 15K route took us through dense forests, across rocky streams, and up steep inclines that tested every muscle in my body.

The sense of accomplishment when reaching the summit was indescribable. Looking out over the valley below, I felt a deep connection with nature and a renewed appreciation for what my body is capable of achieving.`,
      excerpt: 'Exploring the challenges and rewards of trail running in mountain terrain, and the unique connection with nature it provides.',
      imageUrl: '/api/placeholder/400/200',
      createdAt: '2024-02-08',
      updatedAt: '2024-02-08',
      status: 'published',
      likes: 18,
      comments: 5,
      views: 89
    },
    {
      id: '3',
      title: 'Draft: Marathon Training Tips',
      content: `# Marathon Training Tips

Training for a marathon is a journey that requires dedication, patience, and smart planning. Here are some tips I've learned along the way:

## Building Base Mileage

Start with a solid base of weekly mileage before beginning marathon-specific training. This foundation is crucial for preventing injuries and building endurance.

## Long Run Strategy

The long run is the cornerstone of marathon training. Gradually increase your long run distance, but don't increase by more than 10% each week.

## Recovery and Nutrition

Recovery is just as important as training. Make sure to get adequate sleep, proper nutrition, and listen to your body when it needs rest.`,
      excerpt: 'A collection of practical tips and strategies for marathon training, covering everything from base building to race day preparation.',
      createdAt: '2024-02-20',
      updatedAt: '2024-02-20',
      status: 'draft',
      likes: 0,
      comments: 0,
      views: 3
    }
  ]);

  const handleTitleChange = (value: string) => {
    setCurrentStory(prev => ({ ...prev, title: value }));
  };

  const handleContentChange = (value: string) => {
    setCurrentStory(prev => ({ ...prev, content: value }));
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      // TODO: Implement actual image upload
      console.log('Uploading image:', file.name);
      setCurrentStory(prev => ({ 
        ...prev, 
        imageUrl: URL.createObjectURL(file) 
      }));
    }
  };

  const handleSaveStory = () => {
    if (!currentStory.title || !currentStory.content) {
      alert('Please fill in both title and content');
      return;
    }

    const newStory: Story = {
      id: Date.now().toString(),
      title: currentStory.title,
      content: currentStory.content,
      excerpt: currentStory.content.substring(0, 150) + '...',
      imageUrl: currentStory.imageUrl,
      createdAt: new Date().toISOString().split('T')[0],
      updatedAt: new Date().toISOString().split('T')[0],
      status: 'draft',
      likes: 0,
      comments: 0,
      views: 0
    };

    setStories(prev => [newStory, ...prev]);
    setCurrentStory({ title: '', content: '', imageUrl: '' });
    alert('Story saved as draft!');
  };

  const handleAIPolish = async () => {
    if (!currentStory.content) {
      alert('Please write some content first');
      return;
    }

    setIsAIPolishing(true);
    
    // TODO: Implement actual AI polishing
    setTimeout(() => {
      const polishedContent = currentStory.content
        .replace(/\b(\w+)\b/g, (match) => {
          // Simple demo "polishing" - just capitalize some words
          if (Math.random() > 0.7) {
            return match.charAt(0).toUpperCase() + match.slice(1);
          }
          return match;
        });
      
      setCurrentStory(prev => ({ ...prev, content: polishedContent }));
      setIsAIPolishing(false);
      alert('AI polishing complete! Review the changes and adjust as needed.');
    }, 2000);
  };

  const handleEditStory = (story: Story) => {
    setCurrentStory({
      title: story.title,
      content: story.content,
      imageUrl: story.imageUrl || ''
    });
    setIsEditing(true);
    setActiveTab('editor');
  };

  const handleDeleteStory = (storyId: string) => {
    if (confirm('Are you sure you want to delete this story?')) {
      setStories(prev => prev.filter(story => story.id !== storyId));
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const publishedStories = stories.filter(story => story.status === 'published');
  const draftStories = stories.filter(story => story.status === 'draft');

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
      <div>
          <h1 className="text-3xl font-bold text-foreground">My Stories</h1>
          <p className="text-muted-foreground mt-2">
            Share your running journey and inspire others
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Badge variant="outline" className="bg-blue-50 text-blue-600">
            {publishedStories.length} Published
          </Badge>
          <Badge variant="outline" className="bg-yellow-50 text-yellow-600">
            {draftStories.length} Drafts
          </Badge>
        </div>
      </div>

      {/* Main Content */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="editor" className="flex items-center gap-2">
            <PenTool className="h-4 w-4" />
            Write Story
          </TabsTrigger>
          <TabsTrigger value="gallery" className="flex items-center gap-2">
            <Eye className="h-4 w-4" />
            My Stories
          </TabsTrigger>
        </TabsList>

        {/* Editor Tab */}
        <TabsContent value="editor" className="space-y-6">
          <Card className="neumorphic-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <PenTool className="h-5 w-5" />
                {isEditing ? 'Edit Story' : 'Write New Story'}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Title Input */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">
                  Story Title
                </label>
                <Input
                  placeholder="Enter your story title..."
                  value={currentStory.title}
                  onChange={(e) => handleTitleChange(e.target.value)}
                  className="text-lg"
                />
              </div>

              {/* Image Upload */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">
                  Featured Image
                </label>
                <div className="flex items-center gap-4">
                  <Input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="flex-1"
                  />
                  {currentStory.imageUrl && (
                    <div className="w-20 h-20 rounded-lg overflow-hidden border">
                      <img
                        src={currentStory.imageUrl}
                        alt="Story preview"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                </div>
              </div>

              {/* Content Editor */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label className="text-sm font-medium text-foreground">
                    Story Content (Markdown supported)
                  </label>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={handleAIPolish}
                    disabled={isAIPolishing || !currentStory.content}
                    className="flex items-center gap-2"
                  >
                    <Wand2 className="h-4 w-4" />
                    {isAIPolishing ? 'Polishing...' : 'Polish my writing'}
                  </Button>
                </div>
                <Textarea
                  placeholder="Write your story here... You can use markdown formatting like **bold**, *italic*, # headings, etc."
                  value={currentStory.content}
                  onChange={(e) => handleContentChange(e.target.value)}
                  rows={15}
                  className="font-mono text-sm"
                />
                <div className="text-xs text-muted-foreground">
                  Supports markdown formatting. Use **bold**, *italic*, # headings, - lists, etc.
                </div>
      </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-4 pt-4 border-t">
                <Button
                  onClick={handleSaveStory}
                  className="flex items-center gap-2"
                >
                  <Save className="h-4 w-4" />
                  Save as Draft
                </Button>
                <Button
                  variant="outline"
                  onClick={() => {
                    setCurrentStory({ title: '', content: '', imageUrl: '' });
                    setIsEditing(false);
                  }}
                >
                  Clear
                </Button>
                {isEditing && (
                  <Button
                    variant="outline"
                    onClick={() => setIsEditing(false)}
                  >
                    Cancel Edit
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Gallery Tab */}
        <TabsContent value="gallery" className="space-y-6">
          {/* Published Stories */}
          {publishedStories.length > 0 && (
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-foreground flex items-center gap-2">
                <Eye className="h-5 w-5" />
                Published Stories
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {publishedStories.map((story) => (
                  <Card key={story.id} className="neumorphic-card group hover:shadow-lg transition-shadow">
                    {story.imageUrl && (
                      <div className="aspect-video overflow-hidden rounded-t-lg">
                        <img
                          src={story.imageUrl}
                          alt={story.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    )}
                    <CardHeader>
                      <CardTitle className="text-lg line-clamp-2">{story.title}</CardTitle>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        {formatDate(story.createdAt)}
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-sm text-muted-foreground line-clamp-3">
                        {story.excerpt}
                      </p>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Heart className="h-4 w-4" />
                          {story.likes}
                        </div>
                        <div className="flex items-center gap-1">
                          <MessageCircle className="h-4 w-4" />
                          {story.comments}
                        </div>
                        <div className="flex items-center gap-1">
                          <Eye className="h-4 w-4" />
                          {story.views}
                        </div>
                      </div>
                      <div className="flex items-center gap-2 pt-2">
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => handleEditStory(story)}
                          className="flex-1"
                        >
                          <Edit className="h-4 w-4 mr-1" />
                          Edit
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          className="flex items-center gap-1"
                        >
                          <Share2 className="h-4 w-4" />
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => handleDeleteStory(story.id)}
                          className="text-red-600 hover:text-red-700"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* Draft Stories */}
          {draftStories.length > 0 && (
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-foreground flex items-center gap-2">
                <PenTool className="h-5 w-5" />
                Draft Stories
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {draftStories.map((story) => (
                  <Card key={story.id} className="neumorphic-card group hover:shadow-lg transition-shadow border-yellow-200">
                    {story.imageUrl && (
                      <div className="aspect-video overflow-hidden rounded-t-lg">
                        <img
                          src={story.imageUrl}
                          alt={story.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    )}
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <CardTitle className="text-lg line-clamp-2">{story.title}</CardTitle>
                        <Badge variant="outline" className="bg-yellow-50 text-yellow-600">
                          Draft
                        </Badge>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        {formatDate(story.createdAt)}
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-sm text-muted-foreground line-clamp-3">
                        {story.excerpt}
                      </p>
                      <div className="flex items-center gap-2 pt-2">
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => handleEditStory(story)}
                          className="flex-1"
                        >
                          <Edit className="h-4 w-4 mr-1" />
                          Continue Writing
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => handleDeleteStory(story.id)}
                          className="text-red-600 hover:text-red-700"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
      </div>
    </div>
          )}

          {/* Empty State */}
          {stories.length === 0 && (
            <Card className="neumorphic-card">
              <CardContent className="text-center py-12">
                <PenTool className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  No Stories Yet
                </h3>
                <p className="text-muted-foreground mb-4">
                  Start sharing your running journey with the community!
                </p>
                <Button onClick={() => setActiveTab('editor')}>
                  Write Your First Story
                </Button>
              </CardContent>
            </Card>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
}