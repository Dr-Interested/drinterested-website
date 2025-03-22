"use client"

import type React from "react"

import { useState, useId } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Linkedin, Instagram, ExternalLink, ChevronDown, ChevronUp, ArrowRight } from "lucide-react"
import { president, vicePresidents, departments } from "@/data/members"
import type { MemberType } from "@/data/members"

// Completely redesigned ExpandableBio component
const ExpandableBio = ({ bio }: { bio: string }) => {
  const [isExpanded, setIsExpanded] = useState(false)
  const id = useId()

  if (!bio) return null

  const toggleExpand = () => {
    setIsExpanded(!isExpanded)
  }

  return (
    <div className="relative">
      {isExpanded ? (
        // Full bio when expanded
        <div>
          <p className="text-sm">{bio}</p>
          {bio.length > 100 && (
            <button
              onClick={toggleExpand}
              className="text-secondary text-sm font-medium mt-1 hover:underline flex items-center"
            >
              See less <ChevronUp size={14} className="ml-1" />
            </button>
          )}
        </div>
      ) : (
        // Truncated bio when collapsed
        <div>
          <p className="text-sm">{bio.length > 100 ? bio.substring(0, 100) + "..." : bio}</p>
          {bio.length > 100 && (
            <button
              onClick={toggleExpand}
              className="text-secondary text-sm font-medium mt-1 hover:underline flex items-center"
            >
              See more <ChevronDown size={14} className="ml-1" />
            </button>
          )}
        </div>
      )}
    </div>
  )
}

// Member card component
const MemberCard = ({
  member,
  totalMembers,
  className = "",
  style = {},
}: {
  member: MemberType
  totalMembers: number
  className?: string
  style?: React.CSSProperties
}) => {
  // Calculate column width based on total members
  const getColumnClass = () => {
    if (totalMembers === 1) return "col-span-1"
    if (totalMembers === 2) return "col-span-1 md:col-span-1"
    if (totalMembers === 3) return "col-span-1 md:col-span-1"
    return "col-span-1 sm:col-span-1 md:col-span-1 lg:col-span-1" // 4 or more
  }

  return (
    <div
      className={`bg-tertiary rounded-lg overflow-hidden shadow-md card-hover ${getColumnClass()} ${className} fade-in`}
      style={style}
    >
      <div className="relative h-48">
        <Image
          src={member.image || "/placeholder.svg"}
          alt={member.name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
      </div>
      <div className="p-4">
        <h5 className="font-semibold text-primary" style={{ fontFamily: "Playfair Display, serif" }}>
          {member.name}
        </h5>
        <p className="text-sm text-gray-600">{member.role}</p>
        <div className="mt-2">
          <ExpandableBio bio={member.bio} />
        </div>
        <div className="flex mt-3 space-x-3">
          {member.socialLinks?.linkedin && (
            <Link href={member.socialLinks.linkedin} target="_blank" className="text-gray-600 hover:text-secondary">
              <Linkedin size={18} />
            </Link>
          )}
          {member.socialLinks?.instagram && (
            <Link href={member.socialLinks.instagram} target="_blank" className="text-gray-600 hover:text-secondary">
              <Instagram size={18} />
            </Link>
          )}
          {member.socialLinks?.website && (
            <Link href={member.socialLinks.website} target="_blank" className="text-gray-600 hover:text-secondary">
              <ExternalLink size={18} />
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}

// Director bio component specifically for department directors
const DirectorBio = ({ bio }: { bio: string }) => {
  const [isExpanded, setIsExpanded] = useState(false)
  const id = useId()

  if (!bio) return null

  const toggleExpand = () => {
    setIsExpanded(!isExpanded)
  }

  return (
    <div className="relative">
      {isExpanded ? (
        // Full bio when expanded
        <div>
          <p className="text-sm">{bio}</p>
          {bio.length > 100 && (
            <button
              onClick={toggleExpand}
              className="text-secondary text-sm font-medium mt-1 hover:underline flex items-center"
            >
              See less <ChevronUp size={14} className="ml-1" />
            </button>
          )}
        </div>
      ) : (
        // Truncated bio when collapsed
        <div>
          <p className="text-sm">{bio.length > 100 ? bio.substring(0, 100) + "..." : bio}</p>
          {bio.length > 100 && (
            <button
              onClick={toggleExpand}
              className="text-secondary text-sm font-medium mt-1 hover:underline flex items-center"
            >
              See more <ChevronDown size={14} className="ml-1" />
            </button>
          )}
        </div>
      )}
    </div>
  )
}

// Department component with members section
const Department = ({ department, index }: { department: any; index: number }) => {
  const [showMembers, setShowMembers] = useState(false)

  // Calculate grid columns for directors
  const getDirectorGridClass = () => {
    if (Array.isArray(department.director)) {
      const directorCount = department.director.length
      if (directorCount === 1) return "lg:col-span-2"
      if (directorCount === 2) return "lg:col-span-2"
      return "lg:col-span-2"
    }
    return "lg:col-span-2"
  }

  // Calculate grid columns for department description
  const getDescriptionGridClass = () => {
    if (Array.isArray(department.director)) {
      const directorCount = department.director.length
      if (directorCount === 1) return "lg:col-span-1"
      if (directorCount === 2) return "lg:col-span-1"
      return "lg:col-span-1"
    }
    return "lg:col-span-1"
  }

  // Calculate grid columns for members
  const getMemberGridClass = () => {
    const memberCount = department.members.length
    if (memberCount === 1) return "grid-cols-1"
    if (memberCount === 2) return "grid-cols-1 sm:grid-cols-2"
    if (memberCount === 3) return "grid-cols-1 sm:grid-cols-2 md:grid-cols-3"
    return "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4" // 4 or more
  }

  return (
    <div className="mb-16 fade-in" style={{ animationDelay: `${index * 0.1}s` }} id={department.id}>
      <div className="bg-white p-8 rounded-lg shadow-md mb-8 gradient-border">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Department Description */}
          <div className={getDescriptionGridClass()}>
            <h3 className="text-primary mb-4" style={{ fontFamily: "Playfair Display, serif" }}>
              {department.name}
            </h3>
            <div className="h-1 w-12 bg-secondary mb-4"></div>
            <p className="text-base">{department.description}</p>
          </div>

          {/* Directors */}
          <div className={getDirectorGridClass()}>
            <h4 className="font-semibold text-lg mb-4" style={{ fontFamily: "Montserrat, sans-serif" }}>
              {Array.isArray(department.director) ? "Directors:" : "Director:"}
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {Array.isArray(department.director) ? (
                department.director.map((director: MemberType) => (
                  <div key={director.id} className="flex gap-4 items-start hover-lift">
                    <div className="relative h-16 w-16 flex-shrink-0 rounded-full overflow-hidden">
                      <Image
                        src={director.image || "/placeholder.svg"}
                        alt={director.name}
                        fill
                        className="object-cover"
                        sizes="64px"
                      />
                    </div>
                    <div>
                      <h5 className="font-semibold">{director.name}</h5>
                      <p className="text-sm text-gray-600">{director.role}</p>
                      <div className="mt-1">
                        <DirectorBio bio={director.bio} />
                      </div>
                      <div className="flex mt-2 space-x-3">
                        {director.socialLinks?.linkedin && (
                          <Link
                            href={director.socialLinks.linkedin}
                            target="_blank"
                            className="text-gray-600 hover:text-secondary transition-colors"
                          >
                            <Linkedin size={16} />
                          </Link>
                        )}
                        {director.socialLinks?.instagram && (
                          <Link
                            href={director.socialLinks.instagram}
                            target="_blank"
                            className="text-gray-600 hover:text-secondary transition-colors"
                          >
                            <Instagram size={16} />
                          </Link>
                        )}
                        {director.socialLinks?.website && (
                          <Link
                            href={director.socialLinks.website}
                            target="_blank"
                            className="text-gray-600 hover:text-secondary transition-colors"
                          >
                            <ExternalLink size={16} />
                          </Link>
                        )}
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="flex gap-4 items-start hover-lift">
                  <div className="relative h-16 w-16 flex-shrink-0 rounded-full overflow-hidden">
                    <Image
                      src={department.director.image || "/placeholder.svg"}
                      alt={department.director.name}
                      fill
                      className="object-cover"
                      sizes="64px"
                    />
                  </div>
                  <div>
                    <h5 className="font-semibold">{department.director.name}</h5>
                    <p className="text-sm text-gray-600">{department.director.role}</p>
                    <div className="mt-1">
                      <DirectorBio bio={department.director.bio} />
                    </div>
                    <div className="flex mt-2 space-x-3">
                      {department.director.socialLinks?.linkedin && (
                        <Link
                          href={department.director.socialLinks.linkedin}
                          target="_blank"
                          className="text-gray-600 hover:text-secondary transition-colors"
                        >
                          <Linkedin size={16} />
                        </Link>
                      )}
                      {department.director.socialLinks?.instagram && (
                        <Link
                          href={department.director.socialLinks.instagram}
                          target="_blank"
                          className="text-gray-600 hover:text-secondary transition-colors"
                        >
                          <Instagram size={16} />
                        </Link>
                      )}
                      {department.director.socialLinks?.website && (
                        <Link
                          href={department.director.socialLinks.website}
                          target="_blank"
                          className="text-gray-600 hover:text-secondary transition-colors"
                        >
                          <ExternalLink size={16} />
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Members Summary */}
        <div className="mt-6">
          <h4 className="font-semibold text-lg mb-2" style={{ fontFamily: "Montserrat, sans-serif" }}>
            Members:
          </h4>
          <ul className="list-disc list-inside ml-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
            {department.members.map((member: MemberType) => (
              <li key={member.id}>{member.name}</li>
            ))}
          </ul>
        </div>

        <Button
          className="mt-6 pill-button bg-secondary hover:bg-secondary/90 text-white"
          onClick={() => setShowMembers(!showMembers)}
        >
          {showMembers ? "Hide Members" : "See the Members"}
        </Button>
      </div>

      {/* Expandable Members Section */}
      {showMembers && (
        <div className="bg-white p-8 rounded-lg shadow-md mb-8 fade-in">
          <div className={`grid ${getMemberGridClass()} gap-6`}>
            {department.members.map((member: MemberType, idx: number) => (
              <MemberCard
                key={member.id}
                member={member}
                totalMembers={department.members.length}
                className={`stagger-item`}
                style={{ animationDelay: `${idx * 0.1}s` }}
              />
            ))}
          </div>
          <div className="mt-6 text-center">
            <Button
              onClick={() => setShowMembers(false)}
              className="pill-button bg-primary hover:bg-primary/90 text-white"
            >
              Hide Members
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}

// President bio component
const PresidentBio = ({ bio }: { bio: string }) => {
  const [isExpanded, setIsExpanded] = useState(false)

  if (!bio) return null

  return (
    <div className="relative">
      {isExpanded ? (
        // Full bio when expanded
        <div>
          <p className="text-sm">{bio}</p>
          {bio.length > 100 && (
            <button
              onClick={() => setIsExpanded(false)}
              className="text-secondary text-sm font-medium mt-1 hover:underline flex items-center"
            >
              See less <ChevronUp size={14} className="ml-1" />
            </button>
          )}
        </div>
      ) : (
        // Truncated bio when collapsed
        <div>
          <p className="text-sm">{bio.length > 100 ? bio.substring(0, 100) + "..." : bio}</p>
          {bio.length > 100 && (
            <button
              onClick={() => setIsExpanded(true)}
              className="text-secondary text-sm font-medium mt-1 hover:underline flex items-center"
            >
              See more <ChevronDown size={14} className="ml-1" />
            </button>
          )}
        </div>
      )}
    </div>
  )
}

export default function MembersPage() {
  return (
    <>
      <section className="bg-tertiary py-16 md:py-24">
        <div className="container-custom text-center">
          <h1 className="heading-fancy text-primary mb-6">Our Team</h1>
          <p className="text-xl max-w-3xl mx-auto" style={{ fontFamily: "Montserrat, sans-serif" }}>
            Meet the talented team behind Dr. Interested.
          </p>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="heading-fancy text-primary text-center mb-6">Leadership</h2>
          <div className="section-divider"></div>

          {/* President */}
          <div className="mb-16 mt-12">
            <h3 className="text-primary text-center mb-8" style={{ fontFamily: "Playfair Display, serif" }}>
              President
            </h3>
            <div className="flex justify-center">
              <div className="bg-tertiary rounded-lg overflow-hidden shadow-md w-full max-w-4xl card-hover">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="relative h-64 md:h-auto">
                    <Image
                      src={president.image || "/placeholder.svg"}
                      alt={president.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <div className="p-6 md:col-span-2">
                    <h4 className="text-xl font-bold text-primary" style={{ fontFamily: "Playfair Display, serif" }}>
                      {president.name}
                    </h4>
                    <p className="text-gray-600 mt-1">{president.role}</p>
                    <div className="mt-4">
                      <PresidentBio bio={president.bio} />
                    </div>
                    <div className="flex mt-4 space-x-3">
                      {president.socialLinks?.linkedin && (
                        <Link
                          href={president.socialLinks.linkedin}
                          target="_blank"
                          className="text-gray-600 hover:text-secondary"
                        >
                          <Linkedin size={20} />
                        </Link>
                      )}
                      {president.socialLinks?.instagram && (
                        <Link
                          href={president.socialLinks.instagram}
                          target="_blank"
                          className="text-gray-600 hover:text-secondary"
                        >
                          <Instagram size={20} />
                        </Link>
                      )}
                      {president.socialLinks?.website && (
                        <Link
                          href={president.socialLinks.website}
                          target="_blank"
                          className="text-gray-600 hover:text-secondary"
                        >
                          <ExternalLink size={20} />
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Vice Presidents */}
          <div className="mb-16">
            <h3 className="text-primary text-center mb-8" style={{ fontFamily: "Playfair Display, serif" }}>
              Vice Presidents
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center">
              {vicePresidents.map((vp) => (
                <div
                  key={vp.id}
                  className="bg-tertiary rounded-lg overflow-hidden shadow-md w-full max-w-sm card-hover"
                >
                  <div className="relative h-64 w-full">
                    <Image
                      src={vp.image || "/placeholder.svg"}
                      alt={vp.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <div className="p-6 text-center">
                    <h4 className="text-xl font-bold text-primary" style={{ fontFamily: "Playfair Display, serif" }}>
                      {vp.name}
                    </h4>
                    <p className="text-gray-600 mt-1">{vp.role}</p>
                    <div className="mt-4">
                      <ExpandableBio bio={vp.bio} />
                    </div>
                    <div className="flex justify-center mt-4 space-x-3">
                      {vp.socialLinks?.linkedin && (
                        <Link
                          href={vp.socialLinks.linkedin}
                          target="_blank"
                          className="text-gray-600 hover:text-secondary"
                        >
                          <Linkedin size={20} />
                        </Link>
                      )}
                      {vp.socialLinks?.instagram && (
                        <Link
                          href={vp.socialLinks.instagram}
                          target="_blank"
                          className="text-gray-600 hover:text-secondary"
                        >
                          <Instagram size={20} />
                        </Link>
                      )}
                      {vp.socialLinks?.website && (
                        <Link
                          href={vp.socialLinks.website}
                          target="_blank"
                          className="text-gray-600 hover:text-secondary"
                        >
                          <ExternalLink size={20} />
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Departments Section */}
      <section className="section-padding bg-secondary/10">
        <div className="container-custom">
          <h2 className="heading-fancy text-primary text-center mb-6">Our Departments</h2>
          <div className="section-divider"></div>

          <div className="mt-12">
            {departments.map((department, index) => (
              <Department key={department.id} department={department} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Join Us Section */}
      <section className="section-padding bg-white">
        <div className="container-custom text-center space-y-6">
          <h2 className="heading-fancy text-primary">Join Us</h2>
          <p className="max-w-2xl mx-auto" style={{ fontFamily: "Montserrat, sans-serif" }}>
            Want to be part of the Dr. Interested team? We're always looking for passionate, driven students to join our
            community.
          </p>
          <Button className="btn-primary group">
            Apply Now
            <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </section>
    </>
  )
}

